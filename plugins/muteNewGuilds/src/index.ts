import { findByProps, findByStoreName } from "@vendetta/metro";
import { after } from "@vendetta/patcher";
import { invites } from "@vendetta/metro/common";

const { updateGuildNotificationSettings } = findByProps("updateGuildNotificationSettings");
const UserGuildSettingsStore = findByStoreName("UserGuildSettingsStore");

async function patch() {
    const [isMuted, isEveryoneSupressed, isRolesSupressed] = [await UserGuildSettingsStore.isMuted(null), await UserGuildSettingsStore.isSuppressEveryoneEnabled(null), await UserGuildSettingsStore.isSuppressRolesEnabled(null)];
    if (isMuted || isEveryoneSupressed || isRolesSupressed) {
        updateGuildNotificationSettings(null, { "muted": false, "suppress_everyone": false, "suppress_roles": false });
    }

    after("acceptInvite", invites, async (args, res) => {
        const guildId = await res.then(x => {
            return x.guild.id;
        });
        if (guildId === "@me" || guildId === "null" || guildId == null) return;
        updateGuildNotificationSettings(guildId, { "muted": true, "suppress_everyone": true, "suppress_roles": true });
    });
}

export default {
    onLoad: () => {
        patch();
    },
    onUnload: () => {
        patch();
    }
};
