(function (_0x168a94, _0x474c1c) {
  const _0x293aee = _0x168a94();
  while (true) {
    try {
      const _0x335337 = -parseInt(_0x4fe6(471, 0x16f)) / 0x1 * (parseInt(_0x4fe6(413, 0x165)) / 0x2) + parseInt(_0x4fe6(445, 0x161)) / 0x3 * (-parseInt(_0x4fe6(465, 0x163)) / 0x4) + -parseInt(_0x4fe6(421, 0x14b)) / 0x5 + -parseInt(_0x4fe6(441, 0x164)) / 0x6 + parseInt(_0x4fe6(464, 0x172)) / 0x7 + parseInt(_0x4fe6(468, 0x166)) / 0x8 * (parseInt(_0x4fe6(410, 0x157)) / 0x9) + parseInt(_0x4fe6(424, 0x13b)) / 0xa;
      if (_0x335337 === _0x474c1c) {
        break;
      } else {
        _0x293aee.push(_0x293aee.shift());
      }
    } catch (_0x280820) {
      _0x293aee.push(_0x293aee.shift());
    }
  }
})(_0x8ac4, 0x6e444);
function _0x8ac4() {
  const _0x145796 = ['905914QIVINd', ".alk off", '9.1', '13.1', ".mod on", ".al off", 'key', ".al on", '424660agHvSn', 'owner', '7.2', '20501800ZNTXmq', ".always off", ".sticker1 on", ".recording on", '3.2', 'contextInfo', "*SUCCESSFULLY ENABLED ✅*", '2.2', ".voice off", ".seen on", ".bad on", '11.1', 'trim', 'message', '12.2', '10.1', ".sticker1 off", '4474578XGoMTU', '7.1', "You are not authorized to use this command.", 'sendMessage', '23307kXvNUq', ".mod off", '4.2', ".typing on", "*SUCCESSFULLY DISABLED ❌*", '3.1', '14.1', '6.2', 'extendedTextMessage', '1.2', 'var', ".typing off", ".voice on", ".always on", '6.1', ".reply off", ".areact off", '8.1', '1.1', '1975946GrRGwX', '440rRjlar', '11.2', "An error occurred while processing your request.", '24dLGrOp', '8.2', ".recording off", '1mRkiAp', '5.2', "Invalid option. Please select a valid option🔴", '14.2', "settings the bot", 'text', '12.1', '5.1', ".alk on", '772308vLdcLe', '9.2', '2.1'];
  _0x8ac4 = function () {
    return _0x145796;
  };
  return _0x8ac4();
}
function _0x2f1233(_0x1f2394, _0x4902c6) {
  return _0x4fe6(_0x1f2394 + 0x377, _0x4902c6);
}
const {
  cmd,
  commands
} = require('../command');
function _0x4fe6(_0x5cc0d0, _0x37045d) {
  const _0x8ac411 = _0x8ac4();
  _0x4fe6 = function (_0x4fe6f2, _0x1e44e2) {
    _0x4fe6f2 = _0x4fe6f2 - 0x195;
    let _0x1aa026 = _0x8ac411[_0x4fe6f2];
    return _0x1aa026;
  };
  return _0x4fe6(_0x5cc0d0, _0x37045d);
}
cmd({
  'pattern': "var",
  'alias': ['setting', 'settings'],
  'desc': "settings the bot",
  'react': '⚙',
  'category': "owner"
}, async (_0x242566, _0x4e9704, _0x5ae35f, {
  from: _0xfc1904,
  quoted: _0x20e872,
  body: _0x4d8e36,
  isCmd: _0x4d8aec,
  command: _0x56246a,
  args: _0x105e2e,
  q: _0x59cba8,
  isGroup: _0x2380c0,
  sender: _0x4972b8,
  senderNumber: _0x5690b6,
  botNumber2: _0x3835f0,
  botNumber: _0x47dd03,
  pushname: _0x2959af,
  isMe: _0x249fb2,
  isOwner: _0x1eb48d,
  groupMetadata: _0x41cd1c,
  groupName: _0x1fe378,
  participants: _0x560659,
  groupAdmins: _0x19ff9d,
  isBotAdmins: _0x2c8c56,
  isAdmins: _0x2887aa,
  reply: _0x431684
}) => {
  try {
    if (!_0x1eb48d) {
      return _0x431684("You are not authorized to use this command.");
    }
    const _0x192375 = await _0x242566.sendMessage(_0xfc1904, {
      'image': {
        'url': 'https://ibb.co/7xLTpy5Z.jpg'
      },
      'caption': "‎*╭┈┈❍「 BOT SETTINGS 」❍*\n‎*┇⬡ ENABLE/DISABLED ENV*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎🛠 `WORK-MODE` 🛠\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟷.𝟷 ⌬ ᴘʀɪᴠᴀᴛᴇ ᴡᴏʀᴋ* \n‎*├─ 𝟷.𝟸 ⌬ ᴘᴜʙɪᴄ ᴡᴏʀᴋ* \n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎🪄 `AUTO-VOICE` 🪄\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟸.𝟷 ⌬ ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏɴ* \n‎*├─ 𝟸.𝟸 ⌬ ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏғғ* \n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎👀 `STATUS-VIEW` 👀\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟹.𝟷 ⌬ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇ ᴏɴ* \n‎*├─ 𝟹.𝟸 ⌬ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇ ᴏғғ* \n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🎙️ `AUTO-20RECORDING` 🎙️*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟺.𝟷 ⌬ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ*\n‎*├─ 𝟺.𝟸 ⌬ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*⌨ `AUTO-20TYPING` ⌨*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟻.𝟷 ⌬ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ ᴏɴ*\n‎*├─ 𝟻.𝟸 ⌬ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*♻️ `STATUS-REACTION` ♻️*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟼.𝟷 ⌬ sᴛᴀᴛᴜs ʀᴇᴀᴄᴛs ᴏɴ*\n‎*├─ 𝟼.𝟸 ⌬ sᴛᴀᴛᴜs ʀᴇᴀᴄᴛs ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*⛔ `BAD-WORD` ⛔*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟽.𝟷 ⌬ ᴀɴᴛɪ ʙᴀᴅ ᴡᴏʀᴅ ᴏɴ*\n‎*├─ 𝟽.𝟸 ⌬ ᴀɴᴛɪ ʙᴀᴅ ᴡᴏʀᴅ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🎐 `AUTO-STICKER` 🎐*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟾.𝟷 ⌬ ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ ᴏɴ*\n‎*├─ 𝟾.𝟸 ⌬ ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🪼 `AUTO-REPLY` 🪼*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟿.𝟷 ⌬ ᴀᴜᴛᴏ ʀᴇᴘʟʏ ᴏɴ*\n‎*├─ 𝟿.𝟸 ⌬ ᴀᴜᴛᴏ ʀᴇᴘʟʏ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🤹🏻‍♂️ `AUTO-REACTION` 🤹🏻‍♂️*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟷𝟶.𝟷 ⌬ ᴀᴜᴛᴏ ʀᴇᴀᴄᴛɪᴏɴ ᴏɴ*\n‎*├─ 𝟷𝟶.𝟸 ⌬ ᴀᴜᴛᴏ ʀᴇᴀᴄᴛɪᴏɴ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🖇️ `ANTI-LINK` 🖇️*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟷𝟷.𝟷 ⌬ ᴀɴᴛɪ ʟɪɴᴋ ᴏɴ*\n‎*├─ 𝟷𝟷.𝟸 ⌬ ᴀɴᴛɪ ʟɪɴᴋ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🐍 `ANTI-LINK-KICK` 🐍*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟷𝟸.𝟷 ⌬ ᴀɴᴛɪ ʟɪɴᴋ ᴋɪᴄᴋ ᴏɴ*\n‎*├─ 𝟷𝟸.𝟸 ⌬ ᴀɴᴛɪ ʟɪɴᴋ ᴋɪᴄᴋ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🌀 `STATUS-REPLY` 🌀*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟷𝟹.𝟷 ⌬ sᴛᴀᴛᴜs ʀᴇᴘʟʏ ᴏɴ*\n‎*├─ 𝟷𝟹.𝟸 ⌬ sᴛᴀᴛᴜs ʀᴇᴘʟʏ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*🎡 `ALWAYS-ONLINE` 🎡*\n‎*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎*├─ 𝟷𝟺.𝟷 ⌬ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ ᴏɴ*\n‎*├─ 𝟷𝟺.𝟸 ⌬ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ ᴏғғ*\n‎*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*\n‎\n> *© ᴘσωєʀє∂ ву ᴋᴀsʜᴍɪʀɪ м∂⎯꯭̽💀*"
    }, {
      'quoted': _0x4e9704
    });
    _0x242566.ev.on('messages.upsert', async _0x9f948c => {
      const _0x39f78a = _0x9f948c.messages[0x0];
      if (!_0x39f78a.message || !_0x39f78a.message.extendedTextMessage) {
        return;
      }
      const _0x240dfb = _0x39f78a.message.extendedTextMessage.text.trim();
      if (_0x39f78a.message.extendedTextMessage.contextInfo && _0x39f78a.message.extendedTextMessage.contextInfo.stanzaId === _0x192375.key.id) {
        switch (_0x240dfb) {
          case "1.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".mod on");
            break;
          case "1.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".mod off");
            break;
          case "2.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".voice on");
            break;
          case "2.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".voice off");
            break;
          case "3.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".seen on");
          case "3.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".seen off");
            break;
          case '4.1':
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".recording on");
            break;
          case "4.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".recording off");
            break;
          case "5.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".typing on");
            break;
          case "5.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".typing off");
            break;
          case "6.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".sreact on");
            break;
          case "6.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".sreact off");
            break;
          case "7.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".bad on");
            break;
          case "7.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".bad off");
            break;
          case "8.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".sticker1 on");
            break;
          case "8.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".sticker1 off");
            break;
          case "9.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".reply on");
            break;
          case "9.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".reply off");
            break;
          case "10.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".areact on");
            break;
          case '10.2':
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".areact off");
            break;
          case "11.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".al on");
            break;
          case "11.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".al off");
            break;
          case "12.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".alk on");
            break;
          case "12.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".alk off");
            break;
          case "13.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".sreply on");
            break;
          case '13.2':
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".sreply off");
          case "14.1":
            _0x431684("*SUCCESSFULLY ENABLED ✅*");
            _0x431684(".always on");
            break;
          case "14.2":
            _0x431684("*SUCCESSFULLY DISABLED ❌*");
            _0x431684(".always off");
            break;
          default:
            _0x431684("Invalid option. Please select a valid option🔴");
        }
      }
    });
  } catch (_0x258a28) {
    console.error(_0x258a28);
    await _0x242566.sendMessage(_0xfc1904, {
      'react': {
        'text': '❌',
        'key': _0x4e9704.key
      }
    });
    _0x431684("An error occurred while processing your request.");
  }
});