import './assets/theming.scss'
import './assets/fonts.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft ,faChevronRight, faChevronUp, faChevronDown ,faCheck ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faPlusCircle} from  '@fortawesome/free-solid-svg-icons';
library.add( faChevronLeft, faChevronRight, faChevronUp, faChevronDown ,faPlusCircle, faCheck ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

import { themes } from '@storybook/theming';
import logo from './varnish-software-logo-dark-text.svg'


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
      brandImage: logo },
    // Override the default light theme
    light: { 
      ...themes.normal,
      brandImage: logo,
    }
  }
}