import Pages from "./Pages"
import { useContext } from "react"
import { MyContext } from "../App"
import { memo } from "react"
const Main = () => {
  const ctx = useContext(MyContext);
  // console.log(ctx)

  const OnClickChangeAnother = () => {
    ctx.setUserName('C');
    setInterval(() => {
      ctx.setUserName('A');
    },3000)
  }
    
  
  return (
    <>
    <h1>Main</h1>
    <button onClick={OnClickChangeAnother} >Change Another</button>
    <Pages />
    </>
  )
}

export default Main