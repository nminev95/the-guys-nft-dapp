import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const pathAliases = ['pages', 'components', 'utils', 'providers']

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: pathAliases.reduce((aliasesObject, alias) => {
      aliasesObject[`@${alias}`] = path.resolve(__dirname, `src/${alias}`)
      return aliasesObject
    }, {})
  }
})
