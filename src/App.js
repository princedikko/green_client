import React, { createContext, useContext, useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { useLocation } from "react-router-dom";
import Authorization from "./Authorization";
import "./App.css";

const NightMode = createContext();
export const Nigtmode = () => useContext(NightMode);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isnightmode, setIsnightmode] = useState(false);

  return (
    <NightMode.Provider value={{ isnightmode }}>
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ScrollToTop />

        <section className="App">
          <Authorization />
        </section>
      </SnackbarProvider>
    </NightMode.Provider>
  );
}

export default App;
