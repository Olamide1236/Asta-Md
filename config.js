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


global.SESSION_ID = process.env.SESSION_ID ||  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFwbTJOWlRONWFJRTgrNjVsckNZdVJXc2JvYWZtYzBBNXFyQ1d6L1NGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUd6RXlwOVlpK1dZbFBtdC9PS3VKZHArbW5xQWtyQXBrT1FHRkJZZ0FWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSCsxK1lsYklFVXdEL2JIbDNub2tkUDI0TU1iMVZYQXcyMDJrczlBTjA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdWpUQjBQeURNSERwUjkxaDlOUUpKRitveXNpUGlkb3d2YnBldE5rb3hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJUkhmQnJFZE1kY05jRWJFT2JLRk9IN0g1VkowbmgyaVpQTnhFcWVpMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ydmhTaWNoUHlZc0tBVFc3T1NodVVVOFV4K2ZwUWxNVGx2U1BXUkRaaUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkw4MFhINVBLZTBrRkh5Z3lCQS9ubFlISFJFdS9TWFU3Z1JETzhscHlrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTJiMzFPbEszK2lCdHZQZ2Q2eEttdXVLeEh2KzMxQjMxeEtiSHltOHF3Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlovMm5OQzh4WEhHcDNBV3pqSEt3RHpjNE4yYTRFTVhoTWg5RVJEQWgrSlRhaDlEWUFxNjZ2aFR4VkdKSGR4byswc0o2NkFyZVpnVmlKajZ1by9SdERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJXUkpEOTU2WlB6ZWdlMkU1RGppRkEzMHNDRDFCTit3dExwVWoranhVY0ZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBREhyWnF6QlFQQ3VXM3h4ZkRPYTBnIiwicGhvbmVJZCI6IjFmMmFmYjQ2LThjN2MtNGU1NC1hOGRkLWI3MjE1YTM3YTU0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtc3NjZWdXSXlqRHNVKzhXdEF2QWlYcFJuN009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEp0RWl0aHBkbGQrcTFRY2xieUk5VVF6T3UwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNRRjZUOTlUIiwibWUiOnsiaWQiOiIyMzQ4MTIyNjE4Nzg3OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9MQU1ISURFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORDIxTklCRUo3dXhySUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjRHRrOFMrZHhpTHEvNEhEVVpETlYyWmR4ZGNId2R6ZTFGSnhrb2tteUEwPSIsImFjY291bnRTaWduYXR1cmUiOiJYOXVpeGlDTndSWEZqZG95TTRXeGF6QyszVFhwalRXWDNkd0g4NW9WR0p1T3lLdk9nMTF6NWVKWDZIOElaS0haVkZad2tHZFVlQ1lWajVMNGNCUE1CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiait5bW5VQTRWOTZ6UTdlaGlqU3I2OU5lKzV6NjNkd0lhMVNHM3dHNVA4VnduRktmNS8xVFNjUkV2ZE1zZVJnbmNjN2FhSW91eXYvd0UzejNWUkxYQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIyNjE4Nzg3OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhBN1pQRXZuY1lpNnYrQncxR1F6VmRtWGNYWEI4SGMzdFJTY1pLSkpzZ04ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTY2MzEzNDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQiszIn0="


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
