import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <div>
      <input type="text" ref={inputRef} onKeyPress={enter} />
      <button onClick={click}>ADD</button>
    </div>
  );
  function click() {
    add(inputRef.current.value);
    inputRef.current.value = "";
  }
  function enter(e) {
    if (e.key === "Enter") {
      click();
    }
  }
}
