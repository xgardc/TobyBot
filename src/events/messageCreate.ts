import User from '../models/User'
import { Event } from '../structures/Event'

export default new Event('messageCreate', async (message) => {
  if (message.author.bot) return

  try {
    const userData = await User.findOne({
      userId: message.author.id,
    })

    if (userData) {
      userData.xp++
      await userData.save()
    } else {
      await User.create({ userId: message.author.id })
    }
  } catch (error) {
    global.DEBUG_MODE && (await message.reply(error.message))
  }
})
