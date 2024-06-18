

interface ItemsProps {
  listofitems: string[];
  setListofitems: React.Dispatch<React.SetStateAction<string[]>>;

}

export default function Items({ listofitems, setListofitems }: ItemsProps) {
  function remove(index: number) {
    const newList = [...listofitems];
    newList.splice(index, 1);
    setListofitems(newList);
  }

  if (listofitems) {
    return (
      <div style={{ width: '60vw' }} className="">
        {listofitems.map((item, index) => (
        <div className="my-2 border-2 border-black-500 px-2 py-2 flex items-center justify-between" key={index}>
          <div style={{  width: '55vw', overflowWrap: 'break-word' }} className="">{index + 1}. {item} </div>
          
          <button onClick={() => remove(index)} className="text-red-500 text-3xl p-0 mx-2 rounded-full"> &times; </button>
        </div>

          
        ))}

         

      </div>

    );
  } else {
    return null;
  }
}