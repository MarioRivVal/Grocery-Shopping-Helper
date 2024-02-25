import { DeleteIcon } from "./Icons";

export default function Sort({ onClearList, onSortList, value }) {
     return (
          <div className="sort">
               <select value={value} onChange={(e) => onSortList(e)}>
                    <option value="input">Sort by input</option>
                    <option value="product">Sort by name</option>
                    <option value="checked">Sort by checked</option>
               </select>
               <button onClick={onClearList}>
                    <DeleteIcon />
               </button>
          </div>
     );
}
