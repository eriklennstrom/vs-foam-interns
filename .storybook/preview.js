import './assets/theming.scss'
import './assets/fonts.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faCheck, faCaretDown, faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faEye, faEyeSlash, faCheck, faCaretDown,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)
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
    disable: false
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
      appContentBg: '#F6F8FA',
      textColor: '#1F252F'
    }
  }
}