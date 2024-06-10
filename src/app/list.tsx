'use client'

import { useState } from "react";
import Items from './items';


export default function List() {

  let [todoitem, setitems] = useState<List>([]);
  


  function additem(event) {
    event.preventDefault();
    if (document.getElementById('form').value == '') {
      return;
    }
    
    

    setitems([...todoitem, document.getElementById('form').value]);

    document.getElementById('form').value = '';

  }

  
  

  return (

    <div className="">
      
      <form onSubmit="return false" className="mx-auto bg-grey-500" onSubmit={additem}>


        <input placeholder="Add task" id="form" className="rounded-full border-2 border-black-500  px-2 py-2 mx-2" type="text" />
        

      </form>
      
      
    <div className="my-4">
    <Items listofitems={todoitem} setListofitems={setitems}/>
    </div>
    </div>


  );
}


