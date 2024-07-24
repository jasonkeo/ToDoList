import { Trash2, Pencil } from 'lucide-react';
import { Edit } from './popup';
import { useState } from 'react';
interface ItemsProps {
  listofitems: string[];
  setListofitems: React.Dispatch<React.SetStateAction<string[]>>;
  initial: boolean;
}



export default function Items({ initial, listofitems, setListofitems }: ItemsProps) {
  let [open, setOpen] = useState(false)
  let [id, setId] = useState(0)
  function remove(index: number) {
    const newList = [...listofitems];
    newList.splice(index, 1);
    setListofitems(newList);
  }

  function openForm(id: number) {

    setId(id)
    setOpen(true)

  }



  if (listofitems) {
    return (
      <>
        <style>
          {`
  @keyframes fadeIn {
    from {
      opacity: 0.7;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fadeIn {
    animation: fadeIn 0.4s ease-out;
  }

  
`}
        </style>
        <div style={{ minWidth: '300px', width: '70vw', height: '70vh' }} className="border-4 border-black-100 overflow-scroll">
          <p className={`${!initial ? 'hidden' : 'italic visible'} mx-5 text-[1rem] text-center`}><br></br>Loading data...</p>
          {listofitems.map((item, index) => (
            <div className="m-2 border-2 border-black-500 px-2 py-2 flex items-center justify-between fadeIn" key={index}>

              <div style={{ width: '85%', overflowWrap: 'break-word' }} className="">
                <div>
                  <span>{index + 1}.</span>
                  <span style={{ marginLeft: '1em' }}>{item}</span>
                </div>
              </div>

              <div className='shrink-0'>
                <button onClick={() => openForm(index)} className="p-0 mx-[10px]"> <Pencil size={20} /> </button>
                <button onClick={() => remove(index)} className="text-red-500 p-0 mx-[5px]"> <Trash2 size={20} /> </button>

              </div>
            </div>


          ))}

          <Edit id={id} open={open} setOpen={setOpen} todoitem={listofitems} setListofitems={setListofitems} />



        </div>
      </>
    );
  } else {
    return null;
  }
}