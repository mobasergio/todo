const ItemsList = ({ itemsList, handleChange }) =>
  itemsList.map((item) => (
    <div key={item.id} className="item animated">
      <input type="checkbox" onChange={() => handleChange(item.id)} checked={item.done} />
      <span>{item.text}</span>
    </div>
  ));

export default ItemsList;
