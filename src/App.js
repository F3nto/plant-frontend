import React from "react";

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./redux/store/reducers/index"
import { Provider } from "react-redux";
import Navigation from "./navigation/Navigation";
import FavoriteModal from "./Modal/FavoriteModal";

const store = configureStore({

    reducer : rootReducer
})

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <Navigation />
      <FavoriteModal />
    </div>
  </Provider>
  );
}

export default App;
