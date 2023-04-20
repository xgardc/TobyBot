import Client from '../structures/Client'
import { Event } from '../structures/Event'

export default new Event('ready', async (client: Client) => {
  await client.loadCommands()
  client.pogger.success(`Logged in as ${client.user.tag}`)
})
