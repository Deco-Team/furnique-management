import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { privateRoutes, publicRoutes } from './routes/routes'
import AuthProvider from './contexts/AuthContext'

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
  },
  typography: {
    fontFamily: 'Helvetica'
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} Component={route.component} />
              ))}
              {privateRoutes.map((route, index) => (
                <Route key={index} path={route.path} Component={route.component} />
              ))}
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
