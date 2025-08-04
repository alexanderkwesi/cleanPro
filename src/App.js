import React, { useState } from "react";
import { Helmet } from "helmet";
import CleanPro from "../src/components/CleanPro";
import CleanProServices from "../src/components/CleanProServices";
import CleanProBook from "./components/CleanProBooking.js";
import CleanProAboutUs from "./components/CleanProAboutUs.js";
import CleanProContact from "./components/CleanProContact";
import Header from "../src/components/CleanProHeader.js";
import Footer from "../src/components/CleanProFooter.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Get the current path from window.location
  const currentPath = window.location.pathname;

  // Render the appropriate component based on the path
  const renderPage = () => {
    if (currentPath.includes("services")) {
     return <>
        <Header />
        <CleanProServices />
        <Footer />
      </>;
    }
    else if (currentPath.includes("book")) {
           return (
             <>
               <Header />
               <CleanProBook />
               <Footer />
             </>
           );
    }
    else if (currentPath.includes("about")) {
                 return (
                   <>
                     
                     <CleanProAboutUs />
                     
                   </>
                 );
    }
    else if (currentPath.includes("contact")) {
         return (
           <>
             <CleanProContact />
           </>
         );
    }

    // Default to home page
    return  <CleanPro />;
    
  };

  return <div className="min-h-screen bg-gray-50">{renderPage()}</div>;
};

export default App;
