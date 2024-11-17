const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // SUHAIL_08_19_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjWUtySnRLQkxFNlQzYzZxaDlZOUIyUmZvcEtIRmdpR3pZOWFLdWh6OXZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0dGdiVGt5Y1FzZVAzcDRaR2RZZ0tRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4ZjA4M2I2LTM0MTQtNDg4Yi1iMTgwLWEwOTMxMWRlY2U2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAyMixcbiAgICAgIDU2LFxuICAgICAgMjE0LFxuICAgICAgMTc4LFxuICAgICAgNzMsXG4gICAgICAxNTMsXG4gICAgICAxMzIsXG4gICAgICAxNjYsXG4gICAgICAxNzQsXG4gICAgICAxODYsXG4gICAgICAyNDIsXG4gICAgICAxNTEsXG4gICAgICA3NCxcbiAgICAgIDEzNyxcbiAgICAgIDUwLFxuICAgICAgMTYxLFxuICAgICAgMjE4LFxuICAgICAgMTYsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTE0LFxuICAgICAgMTMxLFxuICAgICAgMTkxLFxuICAgICAgNDIsXG4gICAgICAyNTQsXG4gICAgICAyMTksXG4gICAgICAyMTYsXG4gICAgICAxODQsXG4gICAgICA5NCxcbiAgICAgIDEwNyxcbiAgICAgIDcyLFxuICAgICAgNjEsXG4gICAgICA5NCxcbiAgICAgIDE0NSxcbiAgICAgIDY4LFxuICAgICAgMjA3LFxuICAgICAgNDQsXG4gICAgICAxMzIsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGOUhWVlFYQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc4ODU4MjQ2OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiwqLQvc6x0ZUtwqLPg+KIgtGUXCIsXG4gICAgXCJsaWRcIjogXCI5NjA3MDM4MjEyNTA4NDo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKblpqYkFFRU92TjVya0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9jOC9TbUpPSUxIbHM2R1hXOXN3c1k1TEZoTElVeVlvbTh1QnlOL3ovaDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2xUeWh6Y3Rld29PUHR1UGxUTFdkZGJFOHU4cmY4bjBQcW0vdGpxbHcyVWJ2dkUxTzNBdHdUUkxza3BZVThjeTVWNEUzVHBMaWpFZFY0UGs1NnVDQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU2FmSHhXRFh3YkdidUgxSld5S2R1bnJTeGpIcHVtNnBqUXJUSUdJS0dVSXhvYURqSTVMRjFuejlITFlPdE9WNEcvMkIyWkpVMmtXMlc4VTBodEZVaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc4ODU4MjQ2OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTgzMTUzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl6RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXpFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZEdqQTF5cS9wK20zbzRVZnNiQkluVTI5ZHJ1bFdkdmtMbzgyNkFlMDFQWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTc0NjI5NTI5LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDQsNl19LFwidGltZXN0YW1wXCI6XCIxNzMxODMxNDc1NzgwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
