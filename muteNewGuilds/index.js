(function(n,i,o,a){"use strict";const{updateGuildNotificationSettings:s}=i.findByProps("updateGuildNotificationSettings"),t=i.findByStoreName("UserGuildSettingsStore");async function u(){const[r,d,c]=[await t.isMuted(null),await t.isSuppressEveryoneEnabled(null),await t.isSuppressRolesEnabled(null)];(r||d||c)&&s(null,{muted:!1,suppress_everyone:!1,suppress_roles:!1}),o.after("acceptInvite",a.invites,async function(v,p){const e=await p.then(function(f){return f.guild.id});e==="@me"||e==="null"||e==null||s(e,{muted:!0,suppress_everyone:!0,suppress_roles:!0})})}var l={onLoad:function(){u()},onUnload:function(){u()}};return n.default=l,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro,vendetta.patcher,vendetta.metro.common);
