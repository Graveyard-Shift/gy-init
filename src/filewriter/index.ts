import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import * as components from './files/components'
import * as reactnavigation from './files/reactnavigation'
import * as redux from './files/redux'
import * as commonstyles from './files/commonstyles'
import * as utils from './files/utils'

export default class FileWriter {
  constructor(
    private cwd: string
  ) { }

  writeApp(): void {
    writeFileSync(join(this.cwd, 'App.tsx'), components.app)
  }

  writeReduxFiles(): void {
    const hooksDir = join(this.cwd, 'src', 'app', 'hooks', 'redux')
    mkdirSync(hooksDir, { recursive: true })

    const storeDir = join(this.cwd, 'src', 'app', 'store')
    mkdirSync(storeDir, { recursive: true })

    const dummyReducerDir = join(this.cwd, 'src', 'app', 'reducers', 'dummy')
    mkdirSync(dummyReducerDir, { recursive: true })

    writeFileSync(join(hooksDir, 'index.ts'), redux.hooks)
    writeFileSync(join(storeDir, 'index.ts'), redux.store)
    writeFileSync(join(dummyReducerDir, 'index.ts'), redux.dummyReducer)
  }

  writeUtils(): void {
    const utilsDir = join(this.cwd, 'src', 'app', 'utils')
    mkdirSync(utilsDir, { recursive: true })

    writeFileSync(join(utilsDir, 'index.ts'), utils.utils)
  }

  writeReactNavigation(): void {
    const navigationStackDir = join(this.cwd, 'src', 'navigationStack')
    mkdirSync(navigationStackDir, { recursive: true })

    const screensDir = join(this.cwd, 'src', 'screens')

    const homeDir = join(screensDir, 'Home')
    mkdirSync(homeDir, { recursive: true })

    writeFileSync(join(navigationStackDir, 'index.tsx'), reactnavigation.navigationStack)
    writeFileSync(join(homeDir, 'index.tsx'), reactnavigation.homeScreen)
  }

  writeComponents(): void {
    const componentsDir = join(this.cwd, 'src', 'components')

    const goodluckDir = join(componentsDir, 'Goodluck')
    mkdirSync(goodluckDir, { recursive: true })

    writeFileSync(join(goodluckDir, 'index.tsx'), components.goodluck)
  }

  writeCommonStyles(): void {
    const stylesDir = join(this.cwd, 'src', 'styles')
    mkdirSync(stylesDir, { recursive: true })

    writeFileSync(join(stylesDir, 'index.ts'), commonstyles.commonStyles)
  }
}
