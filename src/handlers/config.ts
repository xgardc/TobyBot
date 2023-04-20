import { config } from 'dotenv'

const loadConfig = () => {
  config({ path: '.env.' + process.env.NODE_ENV })
  config({ path: '.env' })

  global.DEBUG_MODE = process.env.NODE_ENV === 'development'
}

export default loadConfig
