import { useTheme } from '../hooks/useTheme.js'
import { Moon, Sun } from 'lucide-react'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  function handleTheme() {
    toggleTheme()
  }

  return <button onClick={handleTheme}>{theme ? <Moon /> : <Sun />}</button>
}

export default ThemeSwitcher
