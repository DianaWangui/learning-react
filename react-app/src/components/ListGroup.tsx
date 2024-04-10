import { MouseEvent } from "react";
function ListGroup() {
  let items = [
  'Kenya',
  'Uganda',
  'Tanzania',
  'Rwanda',
];
// items = [];
const handleClick = (event: MouseEvent) => {console.log(event)};
return (
  <>
    <h1>List</h1>
    {items.length === 0 && <p>No Items found</p>}
    <ul className="list-group">
      {items.map(item => (
        <li className='list-group-item' onClick={handleClick} key={item}>{item}
        </li>
      ))}
  </ul>
  </>
);
}
export default ListGroup;
