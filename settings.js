const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// 🔧 Utility Function
const stringToBool = (str) => str.toLowerCase() === 'true';

// ⚡ ARSLAN-MD CONFIGURATION - ULTRA STYLISH WITH DESCRIPTIONS
module.exports = {
    // 🔐 SESSION & AUTHENTICATION
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNZZElqdG1hUEpRTW56TEYzdXR4USt0Q0QwNHdPblBhUEJ0dkxkNU1FTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmRpVURBaUQyNXVnMXlhN1RJclg2NEVjQ3JBY3ZHc3BQdmcraUQ3T0RDYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T0dLUFpaYU8wenlGR2l3UlFWVzFzS1pDZDdwcnJMZXdQQThxbFVLQkVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnOC9jQ1ZDc2ZlTEV6dFhVTDhVcStMeC8zOE5ObGpjV2lDV083VHA2VEZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDdHhRQVQ2VTRHdUJGVjBGbmt6bE1EaXk5YXU4U1dUaEcwdWk4djUxVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktYNUtHVjNTOURyWHlmdHkzNDIrcnE4VkhITWg5YjRTWkM3UTFVOG8yRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNaTHZ2N1ZRUUFYM0NQSHdHVThmQ0s1MDVSRzFaWnF5YmFZUCt5M2NWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemxVNTRaeHc1Z29CeVVjbXBQaWp3YTBzTERyMTlrSjJkb0hRVkQvVENHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVuMnJzQ2dSbjhTWEtFQU1JaDArTXNHUVI3KzlpY1JnMG5hSVRDQ2t5Z3gybnA3WjdicjZmTEZrMklkMFpWMG9FV2JFZHEzNHh6YjhiZGorL3ZRRkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiWE5Dam0wUTBjMVN1VitOTit5L2lsM0FVVTRFZW1CN045TGhaeUdIdnNBbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUVZsR2pQY1VTck9HVHFoTTFSakV5USIsInBob25lSWQiOiIwMDc2MzE3ZS1kMTY0LTQ0ZWYtYmNiZi1lMDc1NjZhNDRiZDUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidndnQ1ZPMmxlTXF4ZzdIMjBLaU1xeE05c3ZjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitsVWVlY3Uxd3FTcElqNTZsSFVHcy9rUmdBVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTTDNRODVSQSIsIm1lIjp7ImlkIjoiMjM0ODE2OTU0NjA2NTozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzQyNzc4MDE5Nzk5NDA6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pqZGpPWURFTGlscmNrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFRVnJnWEJMRDA1YmZTQS85eGxBZ1ZtdFBMQVdCSXFnMzNPdjd1S2lxUWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJaTGk0cC80ejNTcStvOXZRNHRURmdNWGFLUzgyVkRzVGtPZWduMXpPMDVGdlZDZEZuYk96alZCdVEyYlZDbndyMU1JdWdoTTlvanlZcm9yN2VVOUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4aW1DZGtkWHh1YmJVVHlqclBIcmorTHUvZmtHQ1FwaU1qcDZzdlFGZTR6RTk4ZnBIOGVCR3NRSDZOWTU1MWc5MUNHaE5senAzellHVzNMS1NnU2FEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjk1NDYwNjU6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJha0ZhNEZ3U3c5T1czMGdQL2NaUUlGWnJUeXdGZ1NLb045enIrN2lvcWtJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWdnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjQ0NDY5MTksImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2NaIn0=", // Your WhatsApp session ID - keep this secure!

    // 🎯 SECURITY & MODERATION
    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"), // Auto delete non-whitelisted links
    LINK_WHITELIST: "youtube.com,github.com", // Allowed domains - separate with commas
    LINK_WARN_LIMIT: 3, // Number of warnings before taking action
    LINK_ACTION: "kick", // Action for link violators: "kick", "mute", or "none"
    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"), // Block bad words in group
    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"), // Prevent sharing links in group
    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"), // Block other bots from group
    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"), // Prevent message deletion in group
    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"), // Anti-view once feature
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // Path for anti-delete logs

    // 🤖 BOT CORE FEATURES
    PREFIX: process.env.PREFIX || ".", // Bot command prefix (e.g., .,!,/,#)
    BOT_NAME: process.env.BOT_NAME || "✦[ᴀʀꜱʟᴀɴ-ᴍᴅ]✦", // Your bot's display name
    MODE: process.env.MODE || "public", // Bot mode: "public" or "private"
    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "false"), // Enable AI chatbot feature
    version: process.env.version || "4.0.0", // Bot version number

    // 💬 MESSAGE HANDLING
    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"), // Mark messages as read automatically
    READ_CMD: stringToBool(process.env.READ_CMD || "false"), // Read command messages only
    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"), // Auto-reply to messages

    // 🎭 REACTIONS & INTERACTIONS
    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"), // Enable custom reactions
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍", // Emojis for custom reactions
    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"), // Auto-react to messages
    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"), // Auto-heart react to messages
    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"), // React to owner's messages

    // 👑 OWNER SETTINGS
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919", // Bot owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Bot owner's display name
    king: process.env.king || "ᴀʀꜱʟᴀɴ-ᴍᴅ", // Bot king/developer name
    DEV: process.env.DEV || "923237045919", // Developer contact number

    // 🎨 MEDIA & APPEARANCE
    STICKER_NAME: process.env.STICKER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Default sticker pack name
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg", // Alive command image URL
    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ 🇵🇰*", // Bot description

    // 📱 STATUS FEATURES
    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"), // Auto-see status updates
    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"), // Auto-reply to status
    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"), // Auto-react to status
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴀʀꜱʟᴀɴ-ᴍᴅ 🚀🔥✦*", // Status reply message
    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"), // Show current status

    // 🚀 ADVANCED AUTOMATION
    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"), // Convert text to voice automatically
    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"), // Convert images to stickers automatically
    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"), // Show typing indicator
    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"), // Show recording indicator
    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"), // Fake recording indicator
    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"), // Fake typing indicator
    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"), // Show bot as always online
    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"), // Public or private bot mode

    // 💌 BOT MESSAGES
    LIVE_MSG: process.env.LIVE_MSG || "> 🤖 ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*\n> 🌐 *ɢɪᴛʜᴜʙ :* github.com/Arslan-MD/Arslan_MD", // Alive message

    // 🎊 STARTUP MESSAGE
    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

   *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴀʀꜱʟᴀɴ-ᴍᴅ 🇵🇰* 

> 😘Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
* *~_https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306_~*

> ♻️sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
* *~_https://youtube.com/@arslanmdofficial_~*

    🫣- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
* *~_https://github.com/Arslan-MD/Arslan_MD_~*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ☣️` // Bot startup message
};

// 💫 ARSLAN-MD STYLE GUIDE
global.ARS_STYLE = {
    EMOJIS: {
        SUCCESS: "✅", // Success operation emoji
        ERROR: "❌", // Error operation emoji  
        WARNING: "⚠️", // Warning message emoji
        LOADING: "⏳", // Loading indicator emoji
        SPARKLE: "✨", // Sparkle effect emoji
        ROCKET: "🚀", // Rocket/speed emoji
        FIRE: "🔥", // Fire/hot emoji
        CROWN: "👑" // Crown/royalty emoji
    },
    COLORS: {
        PRIMARY: "#FF0000", // Primary brand color
        SECONDARY: "#00FF00", // Secondary brand color  
        ACCENT: "#0000FF" // Accent brand color
    }
};
