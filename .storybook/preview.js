import './assets/theming.scss'
import './assets/fonts.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft ,faChevronRight, faChevronUp, faChevronDown ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faPlusCircle, faCheck, faXmark} from  '@fortawesome/free-solid-svg-icons';
library.add( faChevronLeft, faChevronRight, faChevronUp, faChevronDown ,faPlusCircle, faCheck ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark)

import { themes } from '@storybook/theming';
import logoLight from './varnish-software-logo-dark-text.svg'
import logoDark from './varnish-software-logo-light-text.svg'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
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
      brandImage: logoDark,
      appBg: '#1F252F',
      appContentBg: '#1F252F',
      textColor: '#F6F8FA',
      barTextColor: '#F6F8FA',
      barSelectedColor: '#F6F8FA',
      barBg: '#1F252F',
     },
    // Override the default light theme
    light: { 
      ...themes.normal,
      brandImage: logoLight,
      appBg: '#F6F8FA',
      appContentBg: '#ffffff',
      textColor: '#1F252F'
    }
  }
}