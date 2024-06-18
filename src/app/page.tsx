'use client'
import List from './list';


export default function Home() {
  return (
    
    <main className="flex justify-center items-center">
      <div className='my-5'><h1 className='text-3xl font-bold text-center w-full'>To Do List</h1>
      
      <List />

      
      
      </div>
    </main>
  );
}
