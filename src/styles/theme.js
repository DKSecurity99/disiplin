import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: 'gray', 
    pink: '#FFB1F7',
    white: '#FFFFFC',
    whitePink: '#FCF0FE',
    violet: '#A353F3',
    violetDark: '#493D6B',
  },
  fontSizes: {
    sm: '1.4rem',
    md: '2rem',
    lg: '3rem',
    xs: '4rem'
  }
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}

export default Theme;
