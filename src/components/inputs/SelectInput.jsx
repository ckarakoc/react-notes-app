export const SelectInput = ({label, name, value, onChange, options}) => {
  return (

    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">{label}</label>
      <select
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        // onChange={(e) => setPriority(e.target.value)}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}
