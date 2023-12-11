const ItemsList = ({ itemsList, handleChange, animate }) =>
  itemsList.map((item) => (
    <div key={item.id} className={`${animate ? 'animated' : ''} item`}>
      <input type="checkbox" onChange={() => handleChange(item.id)} checked={item.done} />
      <span>{item.text}</span>
    </div>
  ));

export default ItemsList;
