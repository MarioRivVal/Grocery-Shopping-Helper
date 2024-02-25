import { useState } from "react";
import Header from "./Header";
import Sort from "./Sort";
import List from "./List";
import Stats from "./Stats";

export default function App() {
     const [items, setItems] = useState([]);
     const [sortBy, setSort] = useState("input");

     let sortedItems;

     function handleAddItems(newItem) {
          setItems((prevItems) => [newItem, ...prevItems]);
     }

     function handleCheckItem(id) {
          setItems((items) =>
               items.map((item) =>
                    item.id === id ? { ...item, checked: !item.checked } : item
               )
          );
     }

     function handleDeleteItem(id) {
          setItems((items) => items.filter((item) => item.id !== id));
     }

     function handleClearList() {
          const confirm = window.confirm(
               "Do you really want to delete the list?"
          );

          if (!confirm) return;
          setItems([]);
     }

     function handleSortList(e) {
          setSort(e.target.value);
     }

     if (sortBy === "input") sortedItems = items;
     if (sortBy === "product")
          sortedItems = items
               .slice()
               .sort((a, b) => a.product.localeCompare(b.product));
     if (sortBy === "checked")
          sortedItems = items.slice().sort((a, b) => +a.checked - +b.checked);

     return (
          <div className="app">
               <Header onAddItems={handleAddItems} />
               <Sort
                    onClearList={handleClearList}
                    onSortList={handleSortList}
                    value={sortBy}
               />
               <List
                    items={sortedItems}
                    onCheckItem={handleCheckItem}
                    onDeleteItem={handleDeleteItem}
               />
               <Stats items={items} />
          </div>
     );
}
