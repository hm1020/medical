import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/state/store";
import Index from "./src";

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};
export default App;
