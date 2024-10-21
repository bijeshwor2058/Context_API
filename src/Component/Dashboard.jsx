import Main from "./Main"
import { useContext } from "react"
import { MyContext } from "../App"

const Dashboard = () => {
  const ctx = useContext(MyContext);
  console.log(ctx)

  const getTodos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    // ctx.setTodos(data)
    console.log(data)
  }

  return (
    <>
    <h1>Dashboard</h1>
    <button onClick={getTodos} >getTodos</button>
    <Main />
    </>
  )
}

export default Dashboard