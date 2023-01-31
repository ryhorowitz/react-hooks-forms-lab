import React, {useState }from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [item, setItem] = useState({ name: '', category: 'Produce'})

  function handleItemChange(e) {
    const key = e.target.name
    const value = e.target.value
    setItem({
      ...item,
      [key]: value 
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: item.name,
      category: item.category
    }
    console.log('newItem', newItem)
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={item.name} onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
