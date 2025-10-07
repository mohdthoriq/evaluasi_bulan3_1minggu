export  default function TodoFilter({ filter, setFilter }) {
    const filters = [ 'All', 'Active', 'Completed' ]

    return (
        <>
        <div className="flex justify-center gap-2 mb-4">
            {filters.map((f) => (
                <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={filter === f ? 'px-3 py-1 text-sm rounded-md bg-blue-500 text-white' : 'px-3 py-1 text-sm rounded-md bg-gray-300 hover:bg-gray-300 text-gray-500'}>
                    {f}
                </button>
            ))}
        </div>
        </>
    )
}