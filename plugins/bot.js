let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler  = async (m, { conn }) => {
	conn.sendFile(m.chat, 'media/bot.mp3', 'tts.opus', null, m, true)
}
handler.command = /^(bot)$/i
handler.fail = null
handler.exp = 100
module.exports = handler

