'use client'


import Items from './items';
import React, { use, useEffect, useState } from 'react';
import app from './firebase';
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { init } from 'next/dist/compiled/webpack/webpack';

//dw
export default function List() {
  app();
  let [todoitem, setitems] = useState<string[]>([]);
  let [initial, setIntial] = useState(true);
  
  const firestore = getFirestore();
  const numberDocPath = 'data/todo';
  const dataRef = doc(firestore, numberDocPath);

  async function writeData(newdata : any) {
    if (initial) {
      return;
    }
    var temp = {
      list: todoitem,
    }
    await setDoc(dataRef, temp);
    
  }
  function capAmount() {
    if (todoitem) {
      if (todoitem.length > 14) {
        
        return true;
        

      }
      return false
    }
  
  }
  useEffect(() => { writeData(todoitem) } , [todoitem]);
  
  useEffect(() => {

    const unsubscribe = onSnapshot(dataRef, (doc) => {
      if (doc.exists()) {
        console.log(JSON.stringify(doc.data()));
        let lst = doc.data().list;
        
        
        setitems(lst);
        setIntial(false);
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

      
      if (todoitem === undefined) {
        setitems([inputElement.value]);
        inputElement.value = '';
        return;
      }
      setitems([...todoitem, inputElement.value]);
      //writeData(inputElement.value)
      inputElement.value = '';
    }
  }




  return (
    
      <div className="flex flex-col items-center justify-center">
        <p className={`${!capAmount()? 'hidden': 'italic visible text-red-500'} mx-5 text-[1rem] text-center`}>You have reached capped amount. Please delete some notes to make more.</p>
      <form className="my-3 bg-grey-500" onSubmit={additem}>


        <input placeholder="Add task" id="form" className="rounded-full border-2 border-black-500  px-2 py-2 mx-2" type="text" disabled={capAmount()}/>


      </form>

      
      <div className="my-1">
        <Items listofitems={todoitem} setListofitems={setitems} />
      </div>

    </div>

    
    

  );
}


