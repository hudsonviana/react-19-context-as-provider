import ThemeSwitcher from './ThemeSwitcher'

// https://www.youtube.com/watch?v=IyWz1jyiKzM

const Header = () => {
  return (
    <header className="flex justify-between p-2 bg-black text-white dark:bg-slate-900 dark:text-gray-200">
      <h1>React 19 Context as Provider</h1>
      <nav>
        <ul>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
