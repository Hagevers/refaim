// import { useState } from "react";
import "./App.css";
import Navbar_menu from "./components/Navbar_menu";
import About from "./components/sections/about";
import Values from "./components/sections/values";
import { Button } from "./components/ui/button";
// import YoutubeEmbed from "./components/ui/YoutubeEmbed";
// import Landing_Image from "/landing_image.jpeg";
// import Landing_Image2 from "/landing_image.jpeg";

function App() {
  return (
    <>
      {/* <NavbarTop /> */}

      <section className="flex flex-col justify-center place-items-center min-h-screen min-w-screen bg-hero-pattern bg-no-repeat bg-cover">
        <Navbar_menu />
        {/* <YoutubeEmbed embedId="HeQIsgRFNas" /> */}
        {/* <img src={Landing_Image} className="h-full w-full bg-cover bg-fixed" /> */}
        <div className="flex flex-col h-full w-full justify-center place-items-center flex-1 text-white">
          <h1 className="font-bold p-2">על מנת להצטרף לעמותה</h1>
          <Button
            className="bg-green-900 hover:bg-green-700 text-white p-8"
            name="join-foundation"
          >
            {" "}
            לחץ כאן
          </Button>
        </div>
      </section>
      <About />
      <Values />
    </>
  );
}

export default App;
