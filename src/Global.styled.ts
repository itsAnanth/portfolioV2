import { createGlobalStyle } from "styled-components";
import cursor from './assets/png/cursor.png'

export const GlobalStyles = createGlobalStyle`

* {
	font-family: 'Montserrat', sans-serif;
	margin: 0;
	box-sizing: border-box;
}

html, a, button, :hover {
    cursor: url(${cursor}), auto;
}

a {
	text-decoration: none;
}


/* scrollBar */

::-webkit-scrollbar {
	width: 5px;
}

::-webkit-scrollbar-track {
	background: #555;
}

::-webkit-scrollbar-thumb {
	background: ${({ theme }) => theme.primary};
	border-radius: 10px;
	transition: 0.3s;
}

img {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

}


@media screen and (max-width: 400px) {
	body {
		overflow-x: hidden;
	}
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
	body {
		overflow-x: hidden;
	}
}
`