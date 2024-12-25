import React, { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, SwitchHorizontalIcon } from "@heroicons/react/outline";

const Services = () => {
  const [classNames, setClassNames] = useState([]);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Class Names"); // Default category
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const target = activeCategory === "Class Names" ? classNames : paymentTypes;
    const setTarget = activeCategory === "Class Names" ? setClassNames : setPaymentTypes;

    if (editingIndex !== null) {
      const updatedItems = [...target];
      updatedItems[editingIndex] = form;
      setTarget(updatedItems);
    } else {
      setTarget([...target, { ...form, active: true }]);
    }
    setForm({ name: "", description: "" });
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleEdit = (index) => {
    const target = activeCategory === "Class Names" ? classNames : paymentTypes;
    setForm(target[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const target = activeCategory === "Class Names" ? classNames : paymentTypes;
    const setTarget = activeCategory === "Class Names" ? setClassNames : setPaymentTypes;
    setTarget(target.filter((_, i) => i !== index));
  };

  const toggleActive = (index) => {
    const target = activeCategory === "Class Names" ? classNames : paymentTypes;
    const setTarget = activeCategory === "Class Names" ? setClassNames : setPaymentTypes;

    const updatedItems = [...target];
    updatedItems[index].active = !updatedItems[index].active;
    setTarget(updatedItems);
  };

  const currentItems = activeCategory === "Class Names" ? classNames : paymentTypes;

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-8xl border-[0.5rem]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveCategory("Class Names")}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === "Class Names" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Class Names
          </button>
          <button
            onClick={() => setActiveCategory("Payment Types")}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === "Payment Types" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Payment Types
          </button>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition duration-200"
        >
          <PlusIcon className="h-5 w-5" />
          Add New
        </button>
      </div>

      <div className="space-y-4">
        {currentItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className={`text-sm ${item.active ? "text-green-600" : "text-red-600"}`}>
                {item.active ? "Active" : "Inactive"}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 flex items-center gap-2 transition duration-200"
              >
                <PencilIcon className="h-5 w-5" />
                Edit
              </button>
              <button
                onClick={() => toggleActive(index)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
                  item.active ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-white hover:bg-gray-500"
                }`}
              >
                <SwitchHorizontalIcon className="h-5 w-5" />
                {item.active ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 transition duration-200"
              >
                <TrashIcon className="h-5 w-5" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to overlay
          >
            <h3 className="text-lg font-semibold mb-4">
              {editingIndex !== null ? `Edit ${activeCategory}` : `Add New ${activeCategory}`}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
