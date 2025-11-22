export function CardView({ items, onEdit }) {
  return (
    <div className="row g-3">
      {items.map((p) => (
        <div key={p.id} className="col-md-4">
          <div className="card p-3">
            <h5>{p.name}</h5>
            <p>${p.price}</p>
            <p>{p.category}</p>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => onEdit(p)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
