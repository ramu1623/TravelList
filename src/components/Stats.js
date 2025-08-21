export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>start adding some items to your packing list🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `you got everything ready to go ✈️`
          : `💼you have ${numItems} items in your list and your already packed the ${numPacked}(${percentage})%`}
      </em>
    </footer>
  );
}
