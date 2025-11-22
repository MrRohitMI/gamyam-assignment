export default function ProductForm({ form, setForm, onSave, onCancel }) {
  return (
    <div className="card p-3 mb-4">
      <h4>{form.id ? "Edit Product" : "Add Product"}</h4>

      <input
        className="form-control mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Stock"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />
      <input
        className="form-control mb-3"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <div className="d-flex">
        <button className="btn btn-primary me-2" onClick={onSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
