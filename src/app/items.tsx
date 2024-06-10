

export default function Items({ listofitems, setListofitems }) {
  function remove(index){
    const newList = [...listofitems];
    newList.splice(index, 1);
    setListofitems(newList);
  }

  if (listofitems) {
    return (
      <div>
      {listofitems.map((item, index) => (
        <div className="my-2 border-2 border-black-500 px-2 py-2 flex items-center justify-between " key={index}>
          {index + 1}. {item} 
          <button onClick={() => remove(index)} className="bg-red-600 hover:bg-red-700 text-white text-sm px-2 py-2 border rounded-full"></button>
        </div>
      ))}
    </div>

    );
  } else {
    return null;
  }
}