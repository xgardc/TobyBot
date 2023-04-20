import mongoose from 'mongoose'

interface Level {
  xp: number
  role: string
}

const guildSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
  },
  levels: {
    type: Array<Level>,
    required: true,
  },
})

const Guild = mongoose.model('guild', guildSchema)

export default Guild
