import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Atividades from './routes/Atividades.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'
import Agendamentos from './routes/Agendamentos.jsx'
import CadastrarUsuario from './routes/CadastrarUsuario.jsx'

const router = createBrowserRouter([
  {
    //Elemento Pai
    path: '/', element: <App />,
    errorElement: <Error />,

    //Elemento Filho
    children: [
      { path: '/', element: <Home /> },
      { path: '/atividades', element: <Atividades/>},
      { path: '/login', element: <Login/>},
      {path:'/Agendamentos',element:<Agendamentos/>},
      {path:'/cadastrarUsuario',element:<CadastrarUsuario/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)

