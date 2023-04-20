import loadConfig from './handlers/config'
import connectDatabase from './handlers/database'
import * as pogger from 'pogger'
import Client from './structures/Client'

loadConfig()

const client = new Client()

connectDatabase()
  .then(() => {
    pogger.success('Connected to the database.')

    client.run()
  })
  .catch((error) => pogger.error(error.message))

export default client
