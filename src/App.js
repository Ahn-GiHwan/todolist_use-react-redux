import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListConatiner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
