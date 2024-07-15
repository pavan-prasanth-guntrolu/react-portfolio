import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function AppLayout() {
  const [mode, setMode] = useState("light");
  function handleMode() {
    setMode((e) => (e === "light" ? "dark" : "light"));
  }
  return (
    <div mode={mode}>
      <Header handleMode={handleMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
