import { createInterface } from 'readline'

export async function askAndWait(): Promise<string> {
  const rinterface = createInterface(
    process.stdin,
    process.stdout
  )

  return new Promise((resolve) => {
    rinterface.question('', (answer) => {
      rinterface.close()
      resolve(answer)
    })
  })
}
