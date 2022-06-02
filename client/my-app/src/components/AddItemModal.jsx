import React from "react";

const AddItemModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div
        className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <input
                type="text"
                className="w-full border-2 rounded p-2 mt-2 mb-3"
                placeholder="Topic"
              />
              <select
                className="w-full border-2 rounded p-2 mt-2 mb-3 bg-white text-gray-400 "
                placeholder="select"
              >
                <option defaultValue>choose priority</option>

                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>

              <textarea
                rows="8"
                className="w-full border-2 rounded  p-2 mt-2 mb-3"
                placeholder="note ..."
              ></textarea>
            </div>

            {/* Buttons */}

            <div className="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="py-2 px-5 border-2 border-rose-500 text-rose-500 rounded  mr-2"
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <button
                type="button"
                className="py-2 px-5 border-2 border-rose-500 bg-rose-500  text-white rounded hover:bg-rose-600 mr-2"
              >
                <i className="fas fa-plus"></i> Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
