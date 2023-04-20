import client from '..'
import { Event } from '../structures/Event'
import { ExtendedInteraction } from '../typings/Command'

export default new Event('interactionCreate', async (interaction) => {
  if (interaction.isCommand()) {
    await interaction.deferReply()
    const command = client.commands.get(interaction.commandName)

    if (!command)
      return interaction.followUp('Var olmayan bir komutu çalıştırdın.')

    command.run({
      client,
      interaction: interaction as ExtendedInteraction,
    })
  }
})
