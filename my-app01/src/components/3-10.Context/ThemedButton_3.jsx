import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemedButton_3(props) {
  const theme = useContext(ThemeContext);
  return (
    <button 
    {...props}
    onClick={props.changeTheme}
    style={{ backgroundColor: theme.background, color: theme.foreground}}
    >
    button
  </button>
  )
}
