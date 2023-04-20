import { Role } from 'discord.js'
import Command from '../../structures/Command'

export default new Command({
  name: 'set',
  description: 'Hangi rolün kaçın seviyede verileceğini ayarlar.',
  options: [
    {
      name: 'role',
      description: 'Verilecek rol',
      type: 8,
    },
    {
      name: 'level',
      description: 'Rolün verileceği seviye',
      type: 4,
    },
  ],
  run: async ({ client, interaction }) => {
    const { role } = interaction.options.get('role')

    return await interaction.followUp({ content: `Bu rol <@&${role.id}>` })
  },
})
