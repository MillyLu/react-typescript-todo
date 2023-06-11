

interface ToDoItemProps {
    todo: Todo
}


export const ToDoItem: React.FC<ToDoItemProps> = ({
    todo
}) => {
    return (
        <li>
            <label>
                <input
                type="checkbox" />
            {todo.text}    
            </label>
        </li>
    )
}