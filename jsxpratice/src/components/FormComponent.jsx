function FormComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input onChange={(e) => setAge(e.target.value)} placeholder="Age" />

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
export default FormComponent;