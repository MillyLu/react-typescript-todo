import { Container } from './components/container/Container';
import { NewTodo } from './components/input/NewTodo';
import { ToDoList } from './components/toDoList/ToDoList';
import "./App.css";

 
function App() {
  return (
    <div className="App">
      <Container>
      <NewTodo />
      <ToDoList />
      </Container>
    </div>


     
  );
}

export default App;
