import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Component/Dashboard'


import './App.css'
import { useState, createContext } from 'react'

export const MyContext = createContext();

function App() {

  const [username, setUserName] = useState("A")
  const[todos,setTodos] = useState([]); 
  
  const routes = createBrowserRouter([
    {
      path : "/",
      element: <Dashboard />
    }
  ])

  return (
    <>
    <MyContext.Provider value={{username, setUserName,todos,setTodos}} >
    <RouterProvider router= { routes }/>
    </MyContext.Provider>
    </>
  )
}

export default App;
