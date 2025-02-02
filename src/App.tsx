import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef();

  const addClick = () => {
    const newItem = inputRef.current.value.trim();
    if (newItem) {
      const newtext = { comp : false, newItem};
      setTodolist([...todolist, newtext]);
      inputRef.current.value = "";
    }
  };

  const lineclick = (index) => {
    const newitem = [...todolist];
    newitem[index].comp = !newitem[index].comp;
    setTodolist(newitem);
  };

  const remouv = (index) => {
    const newitem = [...todolist];
    newitem.splice(index, 1);
    setTodolist(newitem);
  }

  return (
    <>
      <div className="bodyy">
        <div>
          <h2>To Do List</h2>
          <ul>
            {todolist.map(({ newItem, comp }, index) => (
              <li className= "liclass" key={index}>
                <span className={comp ? "don" : "notd"} onClick={() => lineclick(index)}>{newItem}</span>
                <span onClick={() => remouv(index)}>❌</span>
              </li>
            ))}
          </ul>
          <input ref={inputRef}  placeholder="Enter item..." />
          <button onClick={addClick}>Add</button>
        </div>
      </div>
    </>
  );
}

export default App;

