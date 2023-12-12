import { useState } from "react"
import ItemsList from "./ItemsList";

function App() {
  const randomID = () => "id" + Math.random().toString(16).slice(2);

  const [todoItems, setTodoItems] = useState([
    { id: randomID(), text: "Hola que tal", done: false },
    { id: randomID(), text: "Como estamos", done: true},
    { id: randomID(), text: "Mu bien tu que", done: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (id) => {
    setTodoItems(prevItems => {
      return prevItems.map(item => {
        return item.id === id ? { ...item, done: !item.done } : item;
      })
    })
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() == "") return;
    setTodoItems(prevItems => [...prevItems, { id: randomID(), text: inputValue, done: false }]);
    setInputValue("");
  }

  const doneItems = todoItems.filter(item => item.done);
  const notDoneItems = todoItems.filter(item => !item.done);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <h1>To-do list</h1>
      <ItemsList itemsList={notDoneItems} handleChange={handleChange} />
      <h1>Done items</h1>
      <ItemsList itemsList={doneItems} handleChange={handleChange} />
    </>
  )
}

export default App