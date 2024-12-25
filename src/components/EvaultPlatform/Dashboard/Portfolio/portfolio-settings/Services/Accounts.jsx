import React, { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, SwitchHorizontalIcon } from "@heroicons/react/outline";

const Accounts = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ bankName: "", accountNumber: "", accountName: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = form;
      setServices(updatedServices);
    } else if (services.length < 3) {
      setServices([...services, { ...form, active: true }]);
    }
    setForm({ bankName: "", accountNumber: "", accountName: "" });
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setForm(services[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const toggleActive = (index) => {
    const updatedServices = [...services];
    updatedServices[index].active = !updatedServices[index].active;
    setServices(updatedServices);
  };

  return (
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-8xl border-[0.5rem]">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition duration-200"
          >
            <PlusIcon className="h-5 w-5" />
            Add New
          </button>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-medium">{service.bankName}</p>
                <p className="text-sm text-gray-600">
                  {service.accountName} - {service.accountNumber}
                </p>
                <p className={`text-sm ${service.active ? "text-green-600" : "text-red-600"}`}>
                  {service.active ? "Active" : "Inactive"}
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
                    service.active ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-white hover:bg-gray-500"
                  }`}
                >
                  <SwitchHorizontalIcon className="h-5 w-5" />
                  {service.active ? "Deactivate" : "Activate"}
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
                {editingIndex !== null ? "Edit Service" : "Add New Service"}
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={form.bankName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={form.accountNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Account Name</label>
                  <input
                    type="text"
                    name="accountName"
                    value={form.accountName}
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

export default Accounts;
