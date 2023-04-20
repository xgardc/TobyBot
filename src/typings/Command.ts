import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  GuildMember,
  PermissionResolvable,
} from 'discord.js'
import Client from '../structures/Client'

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember
}

interface RunOptions {
  client: Client
  interaction: ExtendedInteraction
}

type RunFunction = (options: RunOptions) => any

type CommandType = {
  userPermissions?: PermissionResolvable[]
  run: RunFunction
} & ChatInputApplicationCommandData

export default CommandType
