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
    
      <div className="flex flex-col">

      <form className="my-3 mx-auto bg-grey-500" onSubmit={additem}>


        <input placeholder="Add task" id="form" className="rounded-full border-2 border-black-500  px-2 py-2 mx-2" type="text" />


      </form>

      
      <div className="my-1">
        <Items listofitems={todoitem} setListofitems={setitems} />
      </div>

    </div>

    
    

  );
}


