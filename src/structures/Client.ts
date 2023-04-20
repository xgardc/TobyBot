import {
  Client as DiscordClient,
  Collection,
  GatewayIntentBits,
} from 'discord.js'
import { promises as fs } from 'fs'
import CommandType from '../typings/Command'
import * as pogger from 'pogger'

class Client extends DiscordClient {
  authorId = process.env.AUTHOR_ID
  token = process.env.DISCORD_TOKEN
  pogger = pogger
  commands = new Collection<string, CommandType>()

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
    })
  }

  async run() {
    this.loadEvents()

    return await this.login(this.token)
  }

  async loadCommands() {
    const slashCommands: CommandType[] = []

    const categories = await fs.readdir(`${__dirname}/../commands`)

    for (const category of categories) {
      const commandFiles = await fs.readdir(
        `${__dirname}/../commands/${category}`
      )

      for (const commandFile of commandFiles) {
        const command: CommandType = (
          await import(`${__dirname}/../commands/${category}/${commandFile}`)
        ).default
        this.commands.set(command.name, command)
        slashCommands.push(command)
      }
    }

    this.guilds.cache.forEach((guild) => guild.commands.set(slashCommands))

    global.DEBUG_MODE &&
      this.commands.forEach((command) =>
        this.pogger.debug(`Command loaded: ${command.name}`)
      )

    this.pogger.info(`All commands(${this.commands.size}) are loaded.`)
  }

  async loadEvents() {
    const eventFiles = await fs.readdir(`${__dirname}/../events/`)

    for (const eventFile of eventFiles) {
      const event = (await import(`../events/${eventFile}`)).default

      this.on(event.name, event.run)

      global.DEBUG_MODE && this.pogger.debug(`Event loaded: ${event.name}`)
    }

    this.pogger.info(`All events(${eventFiles.length}) are loaded.`)
  }
}

export default Client
