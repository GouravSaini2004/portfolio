import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Service from './components/Service/Service'
import MyWork from './components/Project/project'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github'

const git = lazy(() => import("./components/Github/Github"))

// const router = createBrowserRouter([
//       {
//         path: '/',
//         element: <Layout />,
//         children: [
//           {
//             path: "",
//             element: <Home />
//           },
//           {
//             path: "about",
//             element: <About />
//           },
//           {
//             path: "contact",
//             element: <Contact />
//           },
//           {
//             loader: {githubInfoLoader},
//             path: "github",
//             element: <Github />
//           },
//           {
//             path: "user/:id",
//             element: <User />
//           }

//         ]
//       }
//     ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route loader={githubInfoLoader} path='about' element={<About />} />
      <Route path='Service' element={<Service />} />
      <Route path='contact' element={<Contact />} />
      <Route path='project' element={<MyWork />} />
      <Route path='user/:id' element={<User />} />
      {/* <Suspense fallback={<>Loding.....</>}><Github /></Suspense> */}
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
