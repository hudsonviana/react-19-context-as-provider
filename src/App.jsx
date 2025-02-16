import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default App
