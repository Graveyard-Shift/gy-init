import Core from './core'
import { askAndWait } from './utils'

export default async function main() {
  const cwd = process.cwd()
  const appName = await getAppName()
  const core = new Core(cwd, appName)

  const exitCode = await core.main()
  process.exit(exitCode)
}

async function getAppName(): Promise<string> {
  const args = process.argv.slice(2)

  if (args.length > 1) {
    console.error('Too many arguments.')
    console.error('Please provide only one argument; your app\'s name')
    process.exit(1)
  } else if (args.length === 1) {
    return args[0]!
  }

  console.log('Please enter you app\'s name...')

  return askAndWait()
}
