import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { TableView } from "./TableView";
import { CardView } from "./CardView";

export default function ProductApp() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(debounced.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const pageItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const saveProduct = () => {
    if (form.id) {
      setProducts(products.map((p) => (p.id === form.id ? form : p)));
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }
    setShowForm(false);
    setForm({
      id: null,
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    });
  };

  const startAdd = () => {
    setForm({
      id: null,
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    });
    setShowForm(true);
  };

  const startEdit = (p) => {
    setForm(p);
    setShowForm(true);
  };

  return (
    <div className="py-4">
      <h1 className="mb-4">Product Management</h1>

      <div className="row gap-2 mb-3">
        <div className="col">
          <input
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <button
            className="btn btn-outline-primary"
            onClick={() => setView(view === "list" ? "card" : "list")}
          >
            {view == "list" ? "Card" : "Table"} View
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={startAdd}>
            Add Product
          </button>
        </div>
      </div>

      {showForm && (
        <ProductForm
          form={form}
          setForm={setForm}
          onSave={saveProduct}
          onCancel={() => setShowForm(false)}
        />
      )}

      {view === "list" ? (
        <TableView items={pageItems} onEdit={startEdit} />
      ) : (
        <CardView items={pageItems} onEdit={startEdit} />
      )}

      <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
        <button
          className="btn btn-outline-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          className="btn btn-outline-secondary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
