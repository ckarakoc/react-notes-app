export const Note = ({note, deleteNote}) => {
  return (
    <div
      key={note.id}
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{borderLeftColor: note.priority === 'High' ? 'red' : note.priority === 'Medium' ? 'orange' : 'green'}}
    >
      <h3 className="text-xl font-bold">{note.title}</h3>
      <p className="text-sm text-gray-500">{note.category} - {note.priority}</p>
      <p className="text-lg text-gray-600">{note.description}</p>

      <button
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
        onClick={() => deleteNote(note.id)}
      >
        🗑️ Delete
      </button>
    </div>
  )
}
