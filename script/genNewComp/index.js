const GetUserInfo = require('./info')
const Replacer = require('./replacer')

const run = async () => {
  const meta = await GetUserInfo()
  console.log('meta', meta)
  Replacer(meta)
}

run()