import { useContext, useState } from 'react'
import { About, Landing, Navbar } from './components'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { blueThemeDark, greenThemeDark, redThemeDark, redThemeLight } from './theme/theme'

function App() {

	const [count, setCount] = useState(0)
	const theme = redThemeLight
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Landing />
				<About />
			</ThemeProvider>
		</div>
	)
}

export default App
