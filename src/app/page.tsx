'use client'
import List from './list';


export default function Home() {
  return (
    
    <main className="flex flex-col justify-center items-center p-0 m-0">
      <div className='my-5'><h1 className='text-3xl font-bold text-center w-full my-auto'>To Do List</h1>
      
      
      <List />

      
      
      </div>
      <p>by jasonk</p>
    </main>
  );
}
