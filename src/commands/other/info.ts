import Command from '../../structures/Command'

export default new Command({
  name: 'info',
  description: 'Kendimi tanıtayım.',
  run: async ({ interaction }) => {
    return await interaction.followUp('SELAM BEN ADAL!')
  },
})
