'use client'


import Items from './items';
import React, { useEffect, useState } from 'react';
import app from './firebase';
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';


export default function List() {
  app();
  let [todoitem, setitems] = useState<string[]>([]);
  const firestore = getFirestore();
  const numberDocPath = 'data/todo';
  const dataRef = doc(firestore, numberDocPath);

  async function writeData() {
    const temp = {
      value: value + 1
    };
    await setDoc(dataRef, temp);
    setValue(value + 1);
  }
  
  useEffect(() => {
    const unsubscribe = onSnapshot(dataRef, (doc) => {
      if (doc.exists()) {
        console.log(JSON.stringify(doc.data()));
        let num = doc.data().value;
        setItems(num);
      } else {
        console.log('No such document');
      }
    });


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


