import { MyContext } from "../App"
import { useContext} from "react"

const Profile = () => {
  // const[username, setusername] = useState("");
  const ctx = useContext(MyContext)
  // console.log(ctx)
  return (
    <>
    <h1>Profil</h1>
    <h2>user :{ctx.username}</h2>
    </>

  )
}

export default Profile