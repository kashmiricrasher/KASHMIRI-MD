(function (_0x1465c4, _0x4f23a2) {
  const _0x6fed30 = _0x1465c4();
  while (true) {
    try {
      const _0x4af90d = -parseInt(_0x5e96(272, -0x2f)) / 0x1 + -parseInt(_0x5e96(281, -0x35)) / 0x2 * (parseInt(_0x5e96(264, -0x40)) / 0x3) + parseInt(_0x5e96(279, -0x30)) / 0x4 * (-parseInt(_0x5e96(276, -0x40)) / 0x5) + -parseInt(_0x5e96(258, -0x58)) / 0x6 * (parseInt(_0x5e96(271, -0x3c)) / 0x7) + -parseInt(_0x5e96(268, -0x49)) / 0x8 + parseInt(_0x5e96(257, -0x66)) / 0x9 + parseInt(_0x5e96(269, -0x3e)) / 0xa;
      if (_0x4af90d === _0x4f23a2) {
        break;
      } else {
        _0x6fed30.push(_0x6fed30.shift());
      }
    } catch (_0x1c5559) {
      _0x6fed30.push(_0x6fed30.shift());
    }
  }
})(_0x3fca, 0xcfb01);
const {
  cmd
} = require("../command");
function _0x5e96(_0x31c5b1, _0x3ed375) {
  const _0x3fca6b = _0x3fca();
  _0x5e96 = function (_0x5e96c6, _0x40c7b9) {
    _0x5e96c6 = _0x5e96c6 - 0xfc;
    let _0x4df034 = _0x3fca6b[_0x5e96c6];
    return _0x4df034;
  };
  return _0x5e96(_0x31c5b1, _0x3ed375);
}
function _0x39c7e2(_0x24dfe6, _0x21ed30) {
  return _0x5e96(_0x24dfe6 - 0x3bc, _0x21ed30);
}
function _0x3fca() {
  const _0x14c47f = ['save', "❌ Unsupported view-once media type for saving.", 'imageMessage', 'sendMessage', '14079456fwOuHF', '6906nVrySa', '../command', 'mimetype', 'audio/mp4', "❌ An error occurred while saving the media:\n", 'chat', '3quIsGr', 'utility', 'ptt', 'mtype', '2494632oBcJUG', '12513760rRpvkr', "Owner Only - Saves a quoted media (photo, video, audio, view-once) and sends it to your DM", '2422BtAkeV', '173338qLIuAZ', 'wow', 'error', 'download', '10165ZCBnyv', 'videoMessage', 'message', '708sRRBIc', "❌ Unsupported media type for saving.", '1443634tkuHQA', 'image/jpeg', 'video/mp4', 'audioMessage', "*📛 ᴛʜɪs ɪs ᴀɴ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ.*", "> *© ᴘσωєʀє∂ ву ᴋᴀsʜᴍɪʀɪ м∂⎯꯭̽💀*", "Error in save command:", 'quoted', "❌ Error downloading the media:\n", 'viewOnceMessage', 'vv2'];
  _0x3fca = function () {
    return _0x14c47f;
  };
  return _0x3fca();
}
cmd({
  'pattern': "vv2",
  'alias': ["save", "wow", '🙂'],
  'react': '🍉',
  'desc': "Owner Only - Saves a quoted media (photo, video, audio, view-once) and sends it to your DM",
  'category': "utility",
  'filename': __filename
}, async (_0x4499e2, _0x23396b, _0x2ccf25, {
  from: _0xb8c429,
  isOwner: _0x540bb9
}) => {
  try {
    if (!_0x540bb9) {
      return await _0x4499e2.sendMessage(_0x23396b.chat, {
        'text': "*📛 ᴛʜɪs ɪs ᴀɴ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ.*"
      }, {
        'quoted': _0x23396b
      });
    }
    if (!_0x2ccf25.quoted) {
      return await _0x4499e2.sendMessage(_0x23396b.chat, {
        'text': "*👀 ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡ ᴏɴᴄᴇ ᴍᴇssᴀɢᴇ!*"
      }, {
        'quoted': _0x23396b
      });
    }
    let _0x3b1454;
    try {
      _0x3b1454 = await _0x2ccf25.quoted.download();
    } catch (_0x4c7615) {
      console.error("Error in save command:", _0x4c7615);
      return await _0x4499e2.sendMessage(_0x23396b.chat, {
        'text': "❌ Error downloading the media:\n" + _0x4c7615.message
      }, {
        'quoted': _0x23396b
      });
    }
    const _0x1effa5 = _0x2ccf25.quoted.mtype;
    const _0x3d9a9e = {
      'quoted': _0x23396b
    };
    let _0x5af5eb = {};
    switch (_0x1effa5) {
      case 'imageMessage':
        _0x5af5eb = {
          'image': _0x3b1454,
          'caption': "> *© ᴘσωєʀє∂ ву ᴋᴀsʜᴍɪʀɪ м∂⎯꯭̽💀*",
          'mimetype': _0x2ccf25.quoted.mimetype || 'image/jpeg'
        };
        break;
      case "videoMessage":
        _0x5af5eb = {
          'video': _0x3b1454,
          'caption': "> *© ᴘσωєʀє∂ ву ᴋᴀsʜᴍɪʀɪ м∂⎯꯭̽💀*",
          'mimetype': _0x2ccf25.quoted.mimetype || 'video/mp4'
        };
        break;
      case "audioMessage":
        _0x5af5eb = {
          'audio': _0x3b1454,
          'mimetype': "audio/mp4",
          'ptt': _0x2ccf25.quoted.ptt || false
        };
        break;
      case "viewOnceMessage":
        if (_0x2ccf25.quoted.message && _0x2ccf25.quoted.message.imageMessage) {
          _0x5af5eb = {
            'image': _0x3b1454,
            'caption': "> *© ᴘσωєʀє∂ ву ᴋᴀsʜᴍɪʀɪ м∂⎯꯭̽💀*",
            'mimetype': "image/jpeg",
            'viewOnce': true
          };
        } else {
          if (_0x2ccf25.quoted.message && _0x2ccf25.quoted.message.videoMessage) {
            _0x5af5eb = {
              'video': _0x3b1454,
              'caption': "> *© ᴘσωєʀє∂ ву ᴋᴀsʜᴍɪʀɪ м∂⎯꯭̽💀*",
              'mimetype': "video/mp4",
              'viewOnce': true
            };
          } else {
            return await _0x4499e2.sendMessage(_0x23396b.chat, {
              'text': "❌ Unsupported view-once media type for saving."
            }, {
              'quoted': _0x23396b
            });
          }
        }
        break;
      default:
        return await _0x4499e2.sendMessage(_0x23396b.chat, {
          'text': "❌ Unsupported media type for saving."
        }, {
          'quoted': _0x23396b
        });
    }
    await _0x4499e2.sendMessage(_0x23396b.sender, _0x5af5eb, _0x3d9a9e);
  } catch (_0x4cd02e) {
    console.error("Error in save command:", _0x4cd02e);
    await _0x4499e2.sendMessage(_0x23396b.chat, {
      'text': "❌ An error occurred while saving the media:\n" + _0x4cd02e.message
    }, {
      'quoted': _0x23396b
    });
  }
});