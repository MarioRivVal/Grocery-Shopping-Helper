import { useState } from "react";
import { PencilIcon } from "./Icons";

export default function Form({ onAddItems }) {
     const selectNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

     const [quantity, setQuantity] = useState(1);
     const [product, setProduct] = useState("");

     function handleSubmit(e) {
          e.preventDefault();

          if (!product) return;

          const newProduct = {
               id: new Date().getTime(),
               quantity,
               product,
               checked: false,
          };

          onAddItems(newProduct);

          setProduct("");
          setQuantity(1);
     }

     return (
          <form className="form" onSubmit={handleSubmit}>
               <select
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
               >
                    {selectNumbers.map((number) => (
                         <option value={number} key={number}>
                              {" "}
                              {number}
                         </option>
                    ))}
               </select>
               <div className="form__input-box">
                    <PencilIcon />
                    <input
                         type="text"
                         value={product}
                         onChange={(e) => setProduct(e.target.value.trim())}
                    />
               </div>
               <button>OK</button>
          </form>
     );
}
