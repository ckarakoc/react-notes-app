import {useState} from "react";
import {TextInput} from "./inputs/TextInput.jsx";
import {SelectInput} from "./inputs/SelectInput.jsx";
import {TextAreaInput} from "./inputs/TextAreaInput.jsx";

export const NoteForm = ({notes, setNotes}) => {
  /*const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Work');
  const [description, setDescription] = useState('');*/

  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData
    }

    setNotes([newNote, ...notes]);

    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  }

  return (
    <>
      <button
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? 'Hide Form ✗' : 'Add New Note ✚'}
      </button>
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="mb-6"
        >
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              {value: 'High', label: '🔴 High'},
              {value: 'Medium', label: '🟠 Medium'},
              {value: 'Low', label: '🟢 Low'}
            ]}
          />

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              {value: 'Work', label: '💼 Work'},
              {value: 'Personal', label: '🏡 Personal'},
              {value: 'Ideas', label: '💡 Ideas'}
            ]}
          />

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  )
}
