import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "slices";
import { MswRoutes } from "../src/routes";

const store = configureStore({
  reducer: rootReducer,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MswRoutes />
    </Provider>
  );
};

export default App;
