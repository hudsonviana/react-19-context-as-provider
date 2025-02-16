import { useState } from 'react'
import { ThemeContext } from '../context'

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false)

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme)
    document.body.classList.toggle('dark')
  }

  // No React 19 é possível usar contexto como provider, dispensando o uso de 'ThemeContext.Provider', usando apenas 'ThemeContext'

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}

export default ThemeProvider
