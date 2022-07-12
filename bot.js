// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮ZimBotInc SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF ZimBotInc SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃ZimBotInc SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━

const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['6285891214734',''] //owner number 
global.pemilik = ['6282196995322'] //owner number 
global.premium = ['6287894034440'] //premium number
global.pengguna = 'Geral' //username
global.footer = 'Wangsaf Bot'
global.botnma = 'NekoPoi' //bot name
global.ownernma = 'Geral' //owner name
global.packname = 'Ral' //sticker package name
global.author = 'ft pia' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/','.'] //prefix
global.sp = '🔵' //sp
global.mess = {
    success: 'Dah!',
    admin: '*Fitur Cuman Bisa Admin*',
    botAdmin: '*Cuma Bisa BotAdmin*',
    owner: '*cuma Bisa Owner*',
    group: '*Only Group*',
    private: 'Only Private Chat!',
    bot: 'yntkts',
    wait: '*sabar orang sabar disayang tuhan*',
    endLimit: '*Limit Lu Habis Tag Owner Atau Pm Buat Reset,Ato Tunggu 12 jam*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 15 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Zimbot/drips.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
