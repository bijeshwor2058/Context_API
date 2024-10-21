import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Component/Dashboard'


import './App.css'
import { useState, createContext, useReducer } from 'react'

export const MyContext = createContext();

function App() {

  // const [username, setUserName] = useState("A")
  // const[todos,setTodos] = useState([]); 

  const initData =  {
    username: "",
    todos : [],
    product : [] 
  }
  const reducerFn = (state, action) => {
      switch(action.type){
        case "USERNAME":
        return{
          ...state,
          username : action.payload,
        }

        case "TODOS" :
          return{
            ...state
          }
          default:
            return state
      }

  }
  const[state, dispatch] = useReducer(reducerFn, initData);

  const routes = createBrowserRouter([
    {
      path : "/",
      element: <Dashboard />
    }
  ])
  return (
    <>
    <MyContext.Provider value={{ state, dispatch }} >
    <RouterProvider router= { routes }/>
    </MyContext.Provider>
    </>
  )
}

export default App;
