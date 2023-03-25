import { findByProps } from "@vendetta/metro"
import { after } from "@vendetta/patcher"
import { invites } from "@vendetta/metro/common"
import { logger } from "@vendetta"

let patch: any
const { updateGuildNotificationSettings } = findByProps('updateGuildNotificationSettings')

function onLoad() {
    patch = after("acceptInvite", invites, async (args, res) => {
        const guildId = await res.then(x => {
            return x.guild.id
        })
        updateGuildNotificationSettings(guildId, {'muted':true,'suppress_everyone':true,'suppress_roles':true})
    })
}

export default {
    onLoad,
    onUnload: () => {
        patch()
    }
}