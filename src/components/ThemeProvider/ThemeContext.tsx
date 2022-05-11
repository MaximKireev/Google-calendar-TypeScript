import React from 'react'

interface Theme {
    light: {backgroundColor: string, color: string},
    dark: {backgroundColor: string, color: string},
    hipster?: {background: string, color: string},

}
const themes: Theme = {
    light: {
      backgroundColor: "white",
      color: "black"
    },
    dark: {
      backgroundColor: "black",
      color: "white"
    },
  };
  
  export const ThemeContext = React.createContext(themes);
  