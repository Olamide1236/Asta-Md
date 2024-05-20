const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Astropeda/Asta-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "αѕтα-м∂ 2024" 
global.BUTTONS = process.env.BUTTONS || process.env.MENU_BTN || "1";


global.devs = "2348122618787"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348122618787";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348039607375";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348039607375";


global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348039607375";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348039607375";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEx0TWl6QzcwUWtibTVUYzdUclRtZlpqQy8yTWcvYWpkMFVhQnFDRkIyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHg5eHRkUXgxM1ZaYU1OTklmVEFQdGFRaGxxcmgvaHVkNHoxeXBGTU93RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT1V0ZjU5eDJ6QmttSlNET3VHYnhtcWt6amI0YmFLY1ljM05XdmZiMUVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjNGJaUlJhdGphK3c0S2FIZG9DM09nRnRmYXV0ckxaMUFXWmRwelRNZkNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFVmFxMXVNSXFqd05UYXFUdXNmVFhaa0RuT1M1SFNGUHNQUXFKNVkrMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBYWXlwUUFYWlhCaXF4U3dacEx2VmFzS2gwc3pMUTFsTWJkZHBjbWVBUnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUYxeVcrUHdVeXNjUFdZNjNvb1oxT2pOek0rOEM2MGQralhrcCs0L2ptQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0N4VjRxKzhKRXdabDFocHZVUTlYQng4UXVWTnRsN05GS011Mk1SbjBGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LVXNIUmhkaUJVeEVRQzlkR2VmUS9HQTNheWdsQ0VUajd0dVV0cHB6dDNTSkpMVjF5UjkxamRvMnVXNm9QQWJlUXIzRC9oRG1MR2tTM1AyL2dPNWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6ImFrYUFqakFUa3hDZGVwM1pVdU1RZjVnS1ptQWpjdkVOcGt4WFhXem5aWEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyMjYxODc4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMThDODQyNjBGNjMwMjk3NDE1NUM5RUEzMEVBRTFERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE2MjM2MjQxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTIyNjE4Nzg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU2RDFFRTZDMDhDMEMyRTYwOUFFRDAxM0NBQzkwNURFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTYyMzYyNDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9mMnVsYm9uVFhlNzBQU1RCdElkM3ciLCJwaG9uZUlkIjoiYjM5ZDljNjQtYzY2OC00MmUzLTk4NjItMjBmOTcxNjE1N2EzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVmeHhkUDZld1FXQnA1NEVQaWxiRmgwQk1MST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkaDRxOXZ3a3ZNSTYxNHhNdllvOVlzMG94aTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQk5OWUxWS0ciLCJtZSI6eyJpZCI6IjIzNDgxMjI2MTg3ODc6NjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT0xBTUhJREUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05EMjFOSUJFTUhmcnJJR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNEdGs4UytkeGlMcS80SERVWkROVjJaZHhkY0h3ZHplMUZKeGtva215QTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFJaFVFS0tzYlNXbGR5NVRQRjFKTHBZNFp3YzJxY1lKY1dCNWI0RVJSdHAvNnYwMndJZVdBK21kRmk1S25UV0NqSlFkRkl3V0lOZWx2aVJGdU5YZUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2YXhBNmFPdWxrTUgrbnUzUGFaTGZBQm9adGpvSWhJMjdiTTRRZTUzWE9KZ2lhaG1Lb3RGbEc3OXZJcU03b21XQlBLMitwb2I0c0lzUHMvMTByRENoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjI2MTg3ODc6NjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEE3WlBFdm5jWWk2ditCdzFHUXpWZG1YY1hYQjhIYzN0UlNjWktKSnNnTiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjIzNjIzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCKzMifQ=="


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "αѕтα-м∂ 2024" , 
 
  author : process.env.PACK_AUTHER|| "OLAMHIDE",
  packname: process.env.PACK_NAME || "OLAMHIDE",
  botname : process.env.BOT_NAME  || "OLAMHIDE",
  ownername:process.env.OWNER_NAME|| "OLAMHIDE",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
