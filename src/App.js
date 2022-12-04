import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themePalette } from './config/themePalette';
import { themeSizes } from './config/themeSizes';
import MainPage from './pages/MainPage';

import './App.css';

const theme = createTheme({
	palette: themePalette,
	typography: {
		fontFamily: `${['Mulish', 'sans-serif'].join(',')}`, //  'Inter', 'Rajdhani',
		...themeSizes,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
						width: '3px',
						height: '5px',
					},
					'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
						'backgroundColor': themePalette.scroll.thumb,
						'minHeight': 10,
						'borderRadius': 4,
						'&:hover': {
							backgroundColor: themePalette.scroll.hover,
						},
					},
					'&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
						backgroundColor: themePalette.scroll.track,
						borderRadius: 4,
					},
				},
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainPage />
		</ThemeProvider>
	);
}

export default App;
