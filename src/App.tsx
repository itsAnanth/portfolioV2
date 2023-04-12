import { useContext, useState } from 'react'
import { About, BackToTop, Landing, Navbar } from './components'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { blueThemeDark, greenThemeDark, redThemeDark, redThemeLight } from './theme/theme'
import { GlobalStyles } from './Global.styled';
import { Theme, all } from './theme/theme';

function App() {

	const themeIndex = window.localStorage.getItem('themeIndex');
	const themes = Object.entries(all);
	const foundTheme = themeIndex ? parseInt(themeIndex) : 0;
	const [theme, setTheme] = useState<Theme>(themes[foundTheme][1]);
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyles />

				<Navbar setTheme={setTheme} />
				<Landing />
				<About />
				<BackToTop />
			</ThemeProvider>
		</div>
	)
}

export default App
