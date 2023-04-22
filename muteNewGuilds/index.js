(function(r,s,e,i,u,d,v){"use strict";const{FormSwitchRow:o}=d.Forms;function f(){return v.useProxy(e.storage),React.createElement(u.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(o,{label:"Mute Server",value:e.storage.server,onValueChange:function(t){return e.storage.server=t}}),React.createElement(o,{label:"Suppress @everyone and @here",value:e.storage.everyone,onValueChange:function(t){return e.storage.everyone=t}}),React.createElement(o,{label:"Suppress All Role @mentons",value:e.storage.roles,onValueChange:function(t){return e.storage.roles=t}}))}const{updateGuildNotificationSettings:l}=s.findByProps("updateGuildNotificationSettings"),a=s.findByStoreName("UserGuildSettingsStore");e.storage.server??=!1,e.storage.everyone??=!0,e.storage.roles??=!0;async function c(){const[t,m,S]=[await a.isMuted(null),await a.isSuppressEveryoneEnabled(null),await a.isSuppressRolesEnabled(null)];(t||m||S)&&l(null,{muted:!1,suppress_everyone:!1,suppress_roles:!1}),i.after("acceptInvite",u.invites,async function(R,g){const n=await g.then(function(p){return p.guild.id});n==="@me"||n==="null"||n==null||l(n,{muted:e.storage.server,suppress_everyone:e.storage.everyone,suppress_roles:e.storage.roles})})}var y={onLoad:function(){c()},onUnload:function(){c()},settings:f};return r.default=y,Object.defineProperty(r,"__esModule",{value:!0}),r})({},vendetta.metro,vendetta.plugin,vendetta.patcher,vendetta.metro.common,vendetta.ui.components,vendetta.storage);
