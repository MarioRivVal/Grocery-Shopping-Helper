import { CheckIcon, DeleteIcon } from "./Icons";

export default function Item({ item, onCheckItem, onDeleteItem }) {
     return (
          <li className="item">
               <label>
                    <input
                         type="checkbox"
                         value={item.checked}
                         onChange={() => onCheckItem(item.id)}
                    />
                    <CheckIcon marked={item.checked} />
               </label>
               <span
                    style={
                         item.checked ? { textDecoration: "line-through" } : {}
                    }
               >
                    {item.quantity} {item.product}
               </span>

               <button onClick={() => onDeleteItem(item.id)}>
                    <DeleteIcon />{" "}
               </button>
          </li>
     );
}
