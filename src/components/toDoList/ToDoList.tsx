import { ToDoItem } from "../toDoItem/ToDoItem";

interface TodoListProps {
  todos: Array<Todo>;
}

export const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </div>
  );
};
