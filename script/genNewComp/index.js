const GetUserInfo = require('./info')

const run = async () => {
  const meta = await GetUserInfo()
  console.log('meta', meta)
}

run()