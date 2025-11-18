import {NoteForm} from "./components/NoteForm.jsx";
import {NoteList} from "./components/NoteList.jsx";
import {useState} from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this note?');
    if (!confirmDelete) return;

    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
