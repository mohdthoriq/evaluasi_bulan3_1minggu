export default function TodoFrom ({ newTodo, setNewTodo, addTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTodo.trim() === "") return;
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="border p-2 rounded-lg text-black-500 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type="text"
                placeholder="tambah todo...."
                />
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-bold" type="submit">add</button>
        </form>
    )
}