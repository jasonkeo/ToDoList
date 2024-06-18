'use client'

import { useState } from "react";
import Items from './items';


export default function List() {

  let [todoitem, setitems] = useState<string[]>([]);



  function additem(event: React.FormEvent) {
    event.preventDefault();

    const formElement = document.getElementById('form');
    if (formElement) {
      const inputElement = formElement as HTMLInputElement;
      if (inputElement.value === '') {
        return;
      }



      setitems([...todoitem, inputElement.value]);
      inputElement.value = '';
    }
  }




  return (
    
      <div className="justify-between flex flex-col items-center justify-center">

      <form className="mx-auto bg-grey-500" onSubmit={additem}>


        <input placeholder="Add task" id="form" className="rounded-full border-2 border-black-500  px-2 py-2 mx-2" type="text" />


      </form>

      
      <div className="my-4">
        <Items listofitems={todoitem} setListofitems={setitems} />
      </div>

    </div>

    
    

  );
}


