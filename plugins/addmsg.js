let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/get/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list nya`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar di list pesan`
    msgs[text] = M.fromObject(M.toObject(await m.getQuotedObj()))
    m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${usedPrefix}${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler