import { spawn } from 'child_process'
import { join } from 'path'
import FileWriter from '../filewriter'
import { ProcessResolve } from './interfaces'

export default class Core {
  FileWriter: FileWriter

  constructor(
    private cwd: string,
    private appName: string
  ) {
    this.cwd = join(cwd, appName)
    this.FileWriter = new FileWriter(this.cwd)
  }

  async main(): Promise<number> {
    return this.work().then(
      () => 0,
      e => { console.error(e); return 1 }
    )
  }

  private async work() {
    await this.runExpoInit()
    await this.installDependencies()
    this.writeFiles()
  }

  private async runExpoInit(): Promise<ProcessResolve> {
    const childProcess = spawn('expo', [
      'init',
      this.appName,
      '-t',
      'expo-template-blank-typescript'
    ], { stdio: 'inherit' })

    return new Promise((resolve, reject) => {
      childProcess.on('error', reject)
      childProcess.on('close', (code, signal) => resolve({ code, signal }))
    })
  }

  private async installDependencies(): Promise<ProcessResolve> {
    const childProcess = spawn('expo', [
      'install',
      '@reduxjs/toolkit',
      'react-redux',
      '@react-navigation/stack',
      '@react-navigation/native',
      'react-native-gesture-handler',
      'react-native-safe-area-context',
      'react-native-screens'
    ], { stdio: 'inherit', cwd: this.cwd })

    return new Promise((resolve, reject) => {
      childProcess.on('error', reject)
      childProcess.on('close', (code, signal) => resolve({ code, signal }))
    })
  }

  private writeFiles(): void {
    this.FileWriter.writeApp()
    this.FileWriter.writeCommonStyles()
    this.FileWriter.writeComponents()
    this.FileWriter.writeReactNavigation()
    this.FileWriter.writeReduxFiles()
    this.FileWriter.writeUtils()
  }
}
