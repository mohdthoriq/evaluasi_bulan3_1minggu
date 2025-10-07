export default function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
        <li className="backdrop-blur-sm bg-white">
            <div className="flex items-center w-100 gap-2 mb-2 p-4 mx-auto">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={toggleTodo}
                />
                <span onClick={toggleTodo}
                    className={todo.completed ? 'line-through text-red-500' : ''}>
                    {todo.text}
                </span>
                <button className="ml-auto" onClick={removeTodo}>🗑️</button>
            </div>
        </li>
    )
}