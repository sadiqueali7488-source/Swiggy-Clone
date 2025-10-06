import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "./appStore";
const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Applayout;
