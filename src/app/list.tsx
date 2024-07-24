'use client'


import Items from './items';
import React, { use, useEffect, useState } from 'react';
import app from './firebase';
import { getFirestore, doc, setDoc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';

//dw
export default function List() {
  app();
  let [todoitem, setitems] = useState<string[]>();
  const firestore = getFirestore();
  const numberDocPath = 'data/todo';
  const dataRef = doc(firestore, numberDocPath);

  async function writeData(newdata : any) {
    var temp = {
      list: todoitem,
    }
    await updateDoc(dataRef, temp);
    
  }
  function capAmount() {
    if (todoitem) {
      if (todoitem.length >= 15) {
        alert('You have reached the maximum amount of items');
        return true;
        

      }
      return false
    }
  
  }
  useEffect(() => { capAmount()? null : writeData(todoitem) } , [todoitem]);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(dataRef, (doc) => {
      if (doc.exists()) {
        console.log(JSON.stringify(doc.data()));
        let lst = doc.data().list;
        setitems(lst);
      } else {
        console.log('No such document');
      }
    });
  }, []);

  function additem(event: React.FormEvent) {
    event.preventDefault();

    const formElement = document.getElementById('form');
    if (formElement) {
      const inputElement = formElement as HTMLInputElement;
      if (inputElement.value === '') {
        return;
      }



      setitems([...todoitem, inputElement.value]);
      //writeData(inputElement.value)
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


