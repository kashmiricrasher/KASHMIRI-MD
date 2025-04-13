const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["kashmiri","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 KASHMIRI-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴋᴀsʜᴍɪʀɪ-ᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴀᴡᴀɪs*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴍ ᴀᴡᴀɪs*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴀᴡᴀɪs xᴅ*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀsʜᴍɪʀɪ-ᴍᴅ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://raw.githubusercontent.com/kashmiricrasher/KASHMIRI-MD/refs/heads/main/lib/kashmiri.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363312991035785@newsletter',
      newsletterName: 'KASHMIRI-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
