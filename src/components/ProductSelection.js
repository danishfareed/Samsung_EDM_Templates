import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';

const ProductSelection = ({ products, selectedProducts, handleProductChange }) => {
  const [selected, setSelected] = useState([]);

  const handleSelectionChange = (value) => {
    setSelected(value);
    handleProductChange(value);
  };

  return (
    <div>
      <Listbox as="div" className="space-y-4">
        {({ open }) => (
          <>
            <div className="space-y-1">
              <Listbox.Label className="block text-sm font-medium text-gray-700">
                Select Products
              </Listbox.Label>
              <Listbox.Button className="w-full py-2 pl-3 pr-10 text-left bg-white border rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                {selected.length === 0
                  ? 'Select products...'
                  : selected.join(', ')}
              </Listbox.Button>
            </div>

            {open && (
              <Listbox.Options static className="absolute w-full py-1 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                {products.map((product) => (
                  <Listbox.Option key={product.id} value={product.name}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? 'text-white bg-indigo-600'
                            : 'text-gray-900'
                        } cursor-pointer select-none relative px-4 py-2`}
                      >
                        <span
                          className={`${
                            selected ? 'font-semibold' : 'font-normal'
                          } block truncate`}
                        >
                          {product.name}
                        </span>

                        {selected && (
                          <span
                            className={`${
                              active
                                ? 'text-white'
                                : 'text-indigo-600'
                            } absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.293 5.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 10.586l4.293-4.293a1 1 0 011.414 0zM6 15a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </>
        )}
      </Listbox>
    </div>
  );
};

export default ProductSelection;
