import React, { createContext, useContext, useState } from "react";
import { SnackbarProvider } from "notistack";
import Authorization from "./Authorization";
import "./App.css";

const NightMode = createContext();
export const Nigtmode = () => useContext(NightMode);

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
        <section className="App">
          <Authorization />
        </section>
      </SnackbarProvider>
    </NightMode.Provider>
  );
}

export default App;
