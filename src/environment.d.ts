declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'

      // Author
      AUTHOR_ID: number

      // Database
      MONGO_CONNECTION_URI: string

      // Discord
      DISCORD_TOKEN: string
    }
  }

  var DEBUG_MODE: boolean
}

export {}
