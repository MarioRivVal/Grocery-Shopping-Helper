import Form from "./Form";

export default function Header({ onAddItems }) {
     return (
          <div className="header">
               <div className="header__title">
                    <h1>My list</h1>
                    <h3>What i need?</h3>
               </div>

               <Form onAddItems={onAddItems} />
          </div>
     );
}
