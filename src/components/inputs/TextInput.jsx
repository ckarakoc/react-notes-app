export const TextInput = ({label, name, value, onChange, required = false}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">{label}</label>
      <input
        type="text"
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        // onChange={(e) => setTitle(e.target.value)}
        onChange={onChange}
        required={required}
      />
    </div>

  )
}
