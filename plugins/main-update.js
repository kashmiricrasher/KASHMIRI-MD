(function (_0x14de1a, _0x2b7671) {
  const _0xe778cf = _0x14de1a();
  while (true) {
    try {
      const _0x5b82db = -parseInt(_0x4d1f(495, 0x2fb)) / 0x1 * (-parseInt(_0x4d1f(475, 0x2e2)) / 0x2) + parseInt(_0x4d1f(485, 0x30c)) / 0x3 + -parseInt(_0x4d1f(477, 0x2f2)) / 0x4 + -parseInt(_0x4d1f(463, 0x2f6)) / 0x5 * (parseInt(_0x4d1f(489, 0x30c)) / 0x6) + -parseInt(_0x4d1f(493, 0x2f2)) / 0x7 * (-parseInt(_0x4d1f(462, 0x2e6)) / 0x8) + -parseInt(_0x4d1f(479, 0x306)) / 0x9 * (-parseInt(_0x4d1f(488, 0x308)) / 0xa) + -parseInt(_0x4d1f(466, 0x2eb)) / 0xb;
      if (_0x5b82db === _0x2b7671) {
        break;
      } else {
        _0xe778cf.push(_0xe778cf.shift());
      }
    } catch (_0x5841be) {
      _0xe778cf.push(_0xe778cf.shift());
    }
  }
})(_0x1431, 0x19973);
function _0x4d1f(_0x289760, _0x4ba8bf) {
  const _0x143161 = _0x1431();
  _0x4d1f = function (_0x4d1fff, _0x3deda5) {
    _0x4d1fff = _0x4d1fff - 0x1c9;
    let _0x38a621 = _0x143161[_0x4d1fff];
    return _0x38a621;
  };
  return _0x4d1f(_0x289760, _0x4ba8bf);
}
const {
  cmd
} = require("../command");
const axios = require('axios');
const fs = require('fs');
const path = require("path");
const AdmZip = require("adm-zip");
function _0x9b3b36(_0x1df931, _0x541a42) {
  return _0x4d1f(_0x541a42 + 0x34b, _0x1df931);
}
const {
  setCommitHash,
  getCommitHash
} = require("../data/updateDB");
function _0x1431() {
  const _0x41a2d5 = ['633458hhQXOM', "*✅ ᴋᴀsʜᴍɪʀɪ-м∂ ιѕ σɴ тнє ℓαтєѕт νєʀѕισɴ: ν𝟹.𝟶.𝟶*", '2423vdimSb', 'lstatSync', "Update error:", "❌ Update failed. Please try manually.", 'config.js', 'writeFileSync', '../command', 'latest.zip', 'path', 'arraybuffer', '16EYLkSu', '5680CycfLt', 'misc', 'log', '743743IjhhvD', 'rmSync', 'adm-zip', "*🫟 вσт ᴜᴘ∂αтє∂ sᴜᴄᴄєѕѕғᴜℓℓʏ!*", '../data/updateDB', 'sync', 'extractAllTo', 'latest', 'mkdirSync', '158gqNebP', "📦 Extracting the latest code...", '763744ZvNSpL', "*🫩 ᴄʜєᴄкιɴg ғᴏʀ ᴋᴀsʜᴍɪʀɪ-м∂ ᴜᴘ∂αтєѕ...*", '27gQQjvc', 'copyFileSync', 'join', 'exit', 'update', 'get', '14664YLwCGW', 'KASHMIRI-MD-main', 'sha', '411770txjgoI', '726rhCuru', 'https://github.com/kashmiricrasher/KASHMIRI-MD/archive/main.zip', 'isDirectory', 'readdirSync'];
  _0x1431 = function () {
    return _0x41a2d5;
  };
  return _0x1431();
}
cmd({
  'pattern': "update",
  'alias': ['up', "sync"],
  'react': '🆕',
  'desc': "Update the bot to the latest version.",
  'category': "misc",
  'filename': __filename
}, async (_0x13e316, _0x11d16a, _0xa0408, {
  reply: _0x1dee26,
  isOwner: _0x11936e
}) => {
  if (!_0x11936e) {
    return _0x1dee26("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
  }
  try {
    await _0x1dee26("*🫩 ᴄʜєᴄкιɴg ғᴏʀ ᴋᴀsʜᴍɪʀɪ-м∂ ᴜᴘ∂αтєѕ...*");
    const {
      data: _0x40d46e
    } = await axios.get('https://api.github.com/repos/kashmiricrasher/KASHMIRI-MD/commits/main');
    const _0x26ab37 = _0x40d46e.sha;
    const _0x28c662 = await getCommitHash();
    if (_0x26ab37 === _0x28c662) {
      return _0x1dee26("*✅ ᴋᴀsʜᴍɪʀɪ-м∂ ιѕ σɴ тнє ℓαтєѕт νєʀѕισɴ: ν1*");
    }
    await _0x1dee26("*🫟 вσт ᴜᴘ∂αтє∂ sᴜᴄᴄєѕѕғᴜℓℓʏ!*");
    const _0x40a6a3 = path.join(__dirname, "latest.zip");
    const {
      data: _0x368674
    } = await axios.get("https://github.com/kashmiricrasher/KASHMIRI-MD/archive/main.zip", {
      'responseType': "arraybuffer"
    });
    fs.writeFileSync(_0x40a6a3, _0x368674);
    await _0x1dee26("📦 Extracting the latest code...");
    const _0x428ba6 = path.join(__dirname, "latest");
    const _0x5572a8 = new AdmZip(_0x40a6a3);
    _0x5572a8.extractAllTo(_0x428ba6, true);
    await _0x1dee26("🔄 Replacing files...");
    const _0x1a91a4 = path.join(_0x428ba6, "KASHMIRI-MD-main");
    const _0x13364e = path.join(__dirname, '..');
    copyFolderSync(_0x1a91a4, _0x13364e);
    await setCommitHash(_0x26ab37);
    fs.unlinkSync(_0x40a6a3);
    fs.rmSync(_0x428ba6, {
      'recursive': true,
      'force': true
    });
    await _0x1dee26("*✅ ᴜᴘᴅᴀᴛᴇ ᴄᴏᴍᴘʟᴇᴛᴇ! ʀᴇsᴛᴀʀᴛɪɴɢ ᴛʜᴇ ʙᴏᴛ..*");
    process.exit(0x0);
  } catch (_0x492f20) {
    console.error("Update error:", _0x492f20);
    return _0x1dee26("❌ Update failed. Please try manually.");
  }
});
function copyFolderSync(_0x3e170a, _0x1837ea) {
  if (!fs.existsSync(_0x1837ea)) {
    fs.mkdirSync(_0x1837ea, {
      'recursive': true
    });
  }
  const _0x4a57a8 = fs.readdirSync(_0x3e170a);
  for (const _0x59d701 of _0x4a57a8) {
    const _0xa23ea4 = path.join(_0x3e170a, _0x59d701);
    const _0x48e58c = path.join(_0x1837ea, _0x59d701);
    if (_0x59d701 === "config.js" || _0x59d701 === 'app.json') {
      console.log("Skipping " + _0x59d701 + " to preserve custom settings.");
      continue;
    }
    if (fs.lstatSync(_0xa23ea4).isDirectory()) {
      copyFolderSync(_0xa23ea4, _0x48e58c);
    } else {
      fs.copyFileSync(_0xa23ea4, _0x48e58c);
    }
  }
}