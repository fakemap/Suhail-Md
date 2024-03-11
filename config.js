const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029VaDE8h6H5JM3xIoOWn1j";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029VaDE8h6H5JM3xIoOWn1j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9fa448b818b24f1e17d20.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233256393706";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/9fa448b818b24f1e17d20.jpg", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_50_03_02_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMEozeFF0bXlybUdod0ZQdDFpTGlHZnNtZXVqNEUwL2hiUW5UYTJ0cUlYND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImYxSDR3MzJqdC9ZRk91MHJ0WDNBVXhMVFhrTzFhQWN3QnEvSk8wczBkU0U9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUc1OEQ3bTZyWFFpUlRxTW5PUGpFdkIreUJDbjdSVjMxNTIzbXVTMDZWaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjZYc3J0YjUzK1luSnh5cTRXZW1kNnVKaTd4M2phekVXRUlLdDQ2TXZKUzA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia01seHJlMDBvZW1BV2NRTWcrbnlER2c2QnBuMktYSnBjQ1MvaSszcjVHOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkxBclhzL2tIL1BKcGJ5RTBwVHdTeS82dTFyaEZQem9MNGt0eGJzdlk0d3c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJZRFlSeUx1Q3JacGRmVGtNTmQrKzRsNS9Lc0twcEY2ZXZlL3QwTHluOG1vPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVHpzSHUyWDFQdFRRSmZXb0tMTlR1ellJNFJKc0JzdDdFdENwTVc2cC9TOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJldFdzOVB1aGhTNmRhdHFlMDJ4Z0ZFekl4RTBTVHN3NjFleStnSm9PYzNJTlArR0pDSU1xVThNdlNTR3JoQXYyZlpBL0wrY1FGLzlGMzVINm9SYUJpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjUyLFwiYWR2U2VjcmV0S2V5XCI6XCI1ZDJKeDlRbElwWSs5bzU1ZWZ0d2tJL0lhUmZHVzZoT1RXdzBxSFVzenJZPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwidUVBTDlrNUxRWU9NYUZ6YnVIUTBiZ1wiLFwicGhvbmVJZFwiOlwiZWEyMTEwM2UtOThlYi00N2RjLWFiOGEtYjA4MjA1YTFlZWY1XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRYVdTeDZCMllMZFlrcXpvb0RzczBTN1lCcE09XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib3FFZUErSHVIc0pudlZiSEJTclA5V21lMHNNPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIldEMkVaWVZaXCIsXCJtZVwiOntcImlkXCI6XCIyMzMyNTYzOTM3MDY6MTdAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcInzCpHwgbWlyQWdlKEZMRykgfMKkfFwiLFwibGlkXCI6XCIyMDczMDA4OTE1MjUyMjY6MTdAbGlkXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNOU3BxNzBCRUltK2pxOEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwicWdHR2RBMlJuRHkyRUZZTFZXOGhmcy8wRHRwc0phM25vVDZCR2gwSW5GND1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInhwOWdSSVI1NHIvV0ZBK1hjYnlRVlhWZnlHN0d4NkQ3SHlKNVNGNHBmR2RGUHNUb0pnRys2TGd1YkxBeUpTY3NndTZubFI0T3JtZ2doN2RvU1dtL0R3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwidzd1OTErd0g4SlRyeW5QTUJTdkJJTWg4ZWdIV1FOM1NUS3BIb1VEQkNDa1JIMVJMcWU0T3dhSkk5OUhHV090ZTcvTzVYYW9vUCtTK09ienRrc0tTaVE9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzMzI1NjM5MzcwNjoxN0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJhb0JoblFOa1p3OHRoQldDMVZ2SVg3UDlBN2FiQ1d0NTZFK2dSb2RDSnhlXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwOTQxNjIwMyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFFelVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFelUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVUmZTSVJvcWJsNUN2emtEVlNQVGNlekpJNnhKempxSlBuUE1GZys2Lzg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5NzA3MTU2OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODc3NTA3NzEzM1wifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "gamerbot",
  ownername:process.env.OWNER_NAME|| "Mirage",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "1W87V99aSisXUQWJckyHrDgL",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "5288ed96-007b-4201-b4fd-9b3bc5616e46",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "gamerbot",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "d39a06cbfea281c42b6b85ead63d3f73",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
