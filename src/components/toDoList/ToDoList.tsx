import { ToDoItem } from "../toDoItem/ToDoItem";

import { useAppSelector } from "../../store/hooks";



export const ToDoList = () => {
  const todos = useAppSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      {todos.todos.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </div>
  );
};
