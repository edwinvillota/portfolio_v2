import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import { Default, Blue, Purple, Green } from '../src/styles/themes'

const themes = [ Default, Blue, Purple, Green ]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(withThemesProvider(themes), ThemeProvider);