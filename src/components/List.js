import Item from "./Item";

export default function List({ items, onCheckItem, onDeleteItem }) {
     return (
          <ul className="list">
               {items.map((item) => (
                    <Item
                         item={item}
                         key={item.id}
                         onCheckItem={onCheckItem}
                         onDeleteItem={onDeleteItem}
                    />
               ))}
          </ul>
     );
}
