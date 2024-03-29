import React from "react";
import {useContext} from 'react'

interface Theme {
	light: { backgroundColor: string; color: string };
	dark: { backgroundColor: string; color: string };
}
const themes: Theme = {
	light: {
		backgroundColor: "white",
		color: "black",
	},
	dark: {
		backgroundColor: "#31343F",
		color: "#EAEAEA",
	},
};

const ThemeContext = React.createContext(themes);

export const useThemeContext =() => {

    const theme = useContext(ThemeContext);
    if (!theme) {
      throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return theme;
  }