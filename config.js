const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  AUDIO_DATA: process.env.AUDIO_DATA || 'ʟᴏᴋɪ-xᴇʀ;ᴊᴀʀᴠɪꜱ;https://telegra.ph/file/f1ae2cd1d9d934d9c2465.jpg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || 'kick',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
  SESSION_ID: process.env.SESSION_ID || 'ajUzN2l_J_A_R_V_I_S_hdG0==',
  LANG: process.env.LANG || 'EN',
  AUTO_REACTION: process.env.AUTO_REACTION || 'true',
  HANDLERS: process.env.HANDLER  || 'null',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: 'main',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'ᴊᴀʀᴠɪꜱ;ᴡᴀʙᴏᴛ',
  AUTO_STATUS_VIEWS: toBool(process.env.AUTO_STATUS_VIEWS || 'false'),
  WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
  GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
  AUTHOR: process.env.AUTHOR || 'ʟᴏᴋɪ-xᴇʀ',
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;ᴊᴀʀᴠɪꜱ-ᴍᴅ;https://telegra.ph/file/f1ae2cd1d9d934d9c2465.jpg',
  SUDO: process.env.SUDO || '917034167123,',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '𝐂𝚫𝚻 𝐒𝚸𝐘;𝐂𝚫𝚻 𝐒𝚸𝐘;https://i.imgur.com/IlHTfNb.mp4',
  WORK_TYPE: process.env.WORK_TYPE || '',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
