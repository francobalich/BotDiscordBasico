const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})
require('dotenv').config()
const TOKEN = process.env.TOKEN

client.on('ready', () => {
  console.log(`¡El bot (${client.user.tag}) se conecto!`)
})

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild || message.channel.type === 'dm') return

  const prefix = '!'
  if (message.content.startsWith(prefix)) {
    const args = message.content.replace(prefix, '').trim()
    const command = args.toLowerCase()

    if (command === 'ping') {
      message.channel.send('Pong')
    } else if (command === 'hola') {
      message.channel.send('Hola, ¿como estas?')
    } else {
      console.log('El comando ingresado no es valido.')
    }
  }
})

client.login(TOKEN)
