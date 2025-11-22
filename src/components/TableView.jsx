export function TableView({ items, onEdit }) {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>${p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
            <td>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => onEdit(p)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
