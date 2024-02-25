export default function Stats({ items }) {
     if (items.length === 0)
          return (
               <footer>
                    <p>Start adding some item to your list</p>
               </footer>
          );

     const numProducts = items.length;
     const numProductsChecked = items.filter((item) => item.checked).length;
     const percentage = Math.round((numProductsChecked / numProducts) * 100);
     return (
          <footer>
               <p>
                    {percentage === 100
                         ? "You got all the products of your list, 100%"
                         : `
                         You already got ${numProductsChecked} of ${numProducts}
                         product of your list, ${percentage}%
                    `}
               </p>
          </footer>
     );
}
