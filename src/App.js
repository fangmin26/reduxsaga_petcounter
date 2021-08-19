import "./App.css";
import { useEffect, useState } from "react";
import { petIncrement, petDecrement, getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);

  /*users*/
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [usersName, setUsersName] = useState(false);

  const clickShow = () => {
    dispatch(getUsers());
    setUsersName(!usersName);
  };
  return (
    <div className="App">
      <h1>Welcome to React Redux Saga Crash Course</h1>
      <button onClick={() => dispatch(petIncrement(3))}>addpet</button>
      <button onClick={() => dispatch(petDecrement())}>removepet</button>
      <h1>petCounter{petCounter}</h1>
      <h2>numberof favorite {petFavorite}</h2>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      <button onClick={clickShow}>btn</button>
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
}

export default App;
