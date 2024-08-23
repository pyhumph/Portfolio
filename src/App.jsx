import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-950 antialiased selection:bg-cyan-300 selection:bg-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
