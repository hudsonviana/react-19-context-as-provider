import { use } from 'react'
import { ThemeContext } from '../context'

// No React 19, usar 'use' em vez de 'useContext'. OBS: as duas formas funcionam, porém, 'use' é uma novidade do React 19.

export function useTheme() {
  const context = use(ThemeContext)

  if (!context) {
    throw new Error('Contexto não disponsível')
  }

  return context
}
