import Todo from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { deleteTodo, toggleTodo } from "../../TodoSlice";
import styles from "./index.module.css";

interface ToDoItemProps {
  todo: Todo;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  return (
    <li key={todo.id} className={styles.item}>
      <label
        className={
          todo.complete === true ? styles.item_text_done : styles.item_text
        }
      >
        <input
          className={styles.item_toggle}
          type="checkbox"
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        {todo.text}
      </label>
      <button
        className={styles.item_btn}
        onClick={() => {
          console.log(typeof todo.id);
          dispatch(deleteTodo(todo.id));
        }}
      >
        ✖
      </button>
    </li>
  );
};
