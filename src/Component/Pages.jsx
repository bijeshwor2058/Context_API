import Profil from "./Profile";
import { MyContext } from "../App";
import { useContext } from "react";

const Pages = () => {
  const ctx = useContext(MyContext);
  // console.log(ctx.todos)
  const onClickChangeName = () => {
    ctx.setUserName("B");
  };
  return (
    <>
      <h1>Pages</h1>
      <button onClick={onClickChangeName}>Change user name</button>
      <ul>
        {ctx.todos.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>

      <Profil />
    </>
  );
};

export default Pages;
