import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { privateRoutes, publicRoutes } from './routes/routes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3964a',
      dark: '#dd8022',
      light: '#e9ad72'
    },
    text: {
      primary: '#000000'
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} Component={route.component} />
            ))}
            {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} Component={route.component} />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
