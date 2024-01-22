import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { publicRoutes } from './routes/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
          {/* {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={<PrivateRoute Component={route.component} />}>
                {route.children?.map((child, index) => (
                  <Route key={index} index={child.index} path={child.path} Component={child.component} />
                ))}
              </Route>
            ))} */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
