const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script2",
    alias: ["sc2","repo2","info2"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MOHSIN*

> *KASHMIRI MD REPO:*
*|* *https://github.com/kashmiricrasher/KASHMIRI-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b*
*╰──────────────●●►*

> *ᴋᴀsʜᴍɪʀɪ*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363312991035785@newsletter',
      newsletterName: "ᴋᴀsʜᴍɪʀɪ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'AWAIS MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/kashmiricrasher/KASHMIRI-MD" ,
thumbnailUrl: "https://raw.githubusercontent.com/kashmiricrasher/KASHMIRI-MD/refs/heads/main/lib/kashmiri.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
