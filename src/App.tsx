import React, {FC} from 'react';

import {SliderInput} from "./components/SliderInput";
import {Products} from "./components/Products";
import {ProductsFromApi} from "./components/ProductsFromApi";

export const MemoizedSliderInput = React.memo(SliderInput);

// Usage in App component
const App = () => {
  return (
      <div className="container">
        <MemoizedSliderInput
            min={0}
            max={100}
            step={1}
            value={50}
            onChange={(newValue) => {
              // Handle the value change here
              console.log(newValue);
              // You can update your state or perform other actions
            }}
        />
          <hr/>
          <Products/>
          <hr/>
          <ProductsFromApi />
      </div>
  );
};

export default App;


