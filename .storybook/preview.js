import './assets/theming.scss'
import './assets/fonts.css'

import { themes } from '@storybook/theming';
import logo from './varnish-software-logo-dark-text.svg'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { 
    disable: true
  } 
  ,
  darkMode: {
    current: 'light',
    classTarget: 'body',
    darkClass: 'dark',
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.normal,
      brandImage: logo },
    // Override the default light theme
    light: { 
      ...themes.normal,
      brandImage: logo,
    }
  }
}