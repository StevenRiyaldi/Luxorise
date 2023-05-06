import { createContext, useState } from "react";

const RouteContext = createContext({
  routeProduct: {},
  setRouteProduct: () => null,
});

export const RouteProvider = ({ children }) => {
  const [routeProduct, setRouteProduct] = useState({});
  const value = { routeProduct, setRouteProduct };

  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};

export default RouteContext;
