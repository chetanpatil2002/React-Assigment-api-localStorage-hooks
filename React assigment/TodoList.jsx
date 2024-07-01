import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function TodoList() {
  let [list, setList] = useState("");
  let [add, setAdd] = useState([]);
  let [index, setIndex] = useState(0);

  const AddHandler = () => {
    setAdd([...add, list]);
    setList("");
  };
  const deleteHandler = (index) => {
    let deleteData = add.filter((e, i) => i !== index);
    setAdd(deleteData);
  };

  const editHandler = (value, index) => {
    setIndex(index);
    setList(value);
  };
  const DeleteAll = ()=>{
    setAdd([])
  }

  return (
    <div className=" w-50 m-auto p-3 mt-4 border-2 bg-blue-800 ">
      <div className=" text-black p-4 border-none rounded-xl border-2 bg-purple-950">
        <div className=" flex justify-center align-items-center gap-3">
          <h1 className=" text-center p-2 fs-1 text-white underline">
            Groccery List
          </h1>
          <Button className=" h-11 w-28 bg-white" color="black" onClick={DeleteAll}>
            Delete List
          </Button>
        </div>
        <div className=" d-flex m-2">
          <Input
          className=" h-11"
            placeholder="Add Your List "
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <Button className="  bg-black  border " onClick={AddHandler}>
            Add
          </Button>
        </div>

        {add.map((e, i) => {
          return (
            <div
              className=" d-flex border mt-2 m-2 justify-content-between align-items-center p-1 rounded-2 h-11"
              style={{ backgroundColor: "violet" }}
              key={i}
            >
              <div>{i + 1}</div>
              <h4 className=" fs-5">{e}</h4>
              <div className=" d-flex">
                <div className=" mx-2">
                  <Trash color="red" onClick={() => deleteHandler(i)} />
                </div>
                <div>
                  <Edit color="green" onClick={() => editHandler(e, i)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
