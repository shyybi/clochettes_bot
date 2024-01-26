const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js')
const fs = require('fs');
const rawdata = fs.readFileSync('config/gacha.json');
const config = JSON.parse(rawdata);
const sqlite = require('sqlite3').verbose();
module.exports = {
    data: new SlashCommandBuilder()
        .setName('gacha')
        .setDescription('.'),
    run: async (Client, interaction) => {
        const sqlite3 = require('sqlite3').verbose();
        // Ouvrir la base de données
        let db = new sqlite3.Database('db/gacha.db', (err) => {
          if (err) {
            console.error(err.message);
          }
          console.log('Connected to the sample database.');
        });
        db.serialize(() => {
          // Créer la table users
          db.run(`CREATE TABLE count (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    count NOT TEXT
                  )`, (err) => {
            if (err) {
              console.error(err.message);
            } else {
              console.log("Table 'users' created.");
            }
          });
          db.run(`CREATE TABLE drops (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            image TEXT,
            description TEXT,
            rare TEXT NOT NULL,
          )`, (err) => {
            if (err) {
            console.error(err.message);
            } else {
            console.log("Table 'users' created.");
            }
        });          
      });
        db.close((err) => {
          if (err) {
            console.error(err.message);
          }
          console.log('Close the database connection.');
        });
        const list = JSON.parse(rawdata);
        const randomIndex = Math.floor(Math.random() * list.length);
        const randomItem = list[randomIndex];
        const embed = new EmbedBuilder()
            .setTitle(randomItem.name)
            .setImage(randomItem.image)
            .setDescription(randomItem.description)

        await interaction.reply({ embeds: [embed] });
    },
};