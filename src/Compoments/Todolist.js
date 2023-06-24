import React, { useState } from "react";
import Listitem from "./Listitem";
import FormAdd from "./FormAdd";
import Data from "./Data";

function Todolist() {
  const [todoList, setTodoList] = useState(Data);

  function addDataInput(data) {
    const newId = Math.random().toString(36).substr(2, 9); // Tạo ID ngẫu nhiên
    const newData = [...todoList, { id: newId, name: data }];
    console.log("New Data:", newData);
    setTodoList(newData);
  }

  function handleDelete(dataId) {
    const newData = todoList.filter((element) => element.id !== dataId);
    setTodoList(newData);
  }

  function handleUpdate(updatedValue, dataId) {
    const updatedList = todoList.map((item) => {
      if (item.id === dataId) {
        return { ...item, name: updatedValue };
      }
      return item;
    });

    setTodoList(updatedList);
  }

  function renderList() {
    return todoList.map((item) => (
      <Listitem handleDelete={handleDelete} handleUpdate={handleUpdate} key={item.id} Data={item} />
    ));
  }

  return (
    <>
      <FormAdd addDataInput={addDataInput} />
      <ul id="myUL">{renderList()}</ul>
    </>
  );
}

export default Todolist;
