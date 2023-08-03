import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/productSlice';
import MarketSelection from './components/MarketSelection';
import ProductSelection from './components/ProductSelection';
import EmailTemplates from './components/EmailTemplates';
import Header from './container/Header';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [templates] = useState([
    { id: '1column', name: '1 Column' },
    { id: '2column', name: '2 Column' },
    // Add more templates here as needed
  ]);

  useEffect(() => {
    fetchProducts(selectedMarket);
  }, [selectedMarket]);

  const fetchProducts = async (market) => {
    try {
      const response = await axios.get(
        `https://esapi.samsung.com/search/suggest/v6?siteCd=${market}&stage=front&searchValue=`
      );
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleMarketChange = (e) => {
    setSelectedMarket(e.target.value);
  };

  const handleProductChange = (selectedValues) => {
    setSelectedProducts(selectedValues);
  };

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <>
      <Header />
    <div>
      <h1>Email Template App</h1>
      {/* <MarketSelection
        markets={[{ siteCd: 'sa', name: 'Market 1' }, { siteCd: 'us', name: 'Market 2' }]}
        selectedMarket={selectedMarket}
        handleMarketChange={handleMarketChange}
      />
      <ProductSelection
        products={products}
        selectedProducts={selectedProducts}
        handleProductChange={handleProductChange}
      />
      <EmailTemplates
        templates={templates}
        selectedTemplate={selectedTemplate}
        handleTemplateChange={handleTemplateChange}
      />
      <h2>Selected Products</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul> */}
    </div>
    </>
  );
};

export default App;