import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const styles = {
  fontSize: "20px",
  color: "red",
};
export default function Nav() {
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid black" }}>
      <ul>
        <li>
          <NavLink to="/todos" activeStyle={styles}>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeStyle={styles}>
            Users
          </NavLink>
        </li>
      </ul>
      <button onClick={click}>Go Todos</button>
    </div>
  );
  function click() {
    dispatch(push("/todos"));
  }
}
