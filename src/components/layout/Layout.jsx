import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Preloader from "./Preloader.jsx";
import FloatingActions from "./FloatingActions.jsx";
import useReveal from "../../hooks/useReveal.js";
import "./layout.css";

const titles = {
  "/": "Veda Infrastructure | Civil Contractors in Chennai Since 2009",
  "/about": "About Us | Veda Infrastructure",
  "/strength": "Our Strength: Fleet, Quarry & Plant | Veda Infrastructure",
  "/projects": "Projects | Veda Infrastructure",
  "/services": "Services | Veda Infrastructure",
  "/contact": "Contact | Veda Infrastructure",
};

export default function Layout() {
  const { pathname } = useLocation();
  const [loaded, setLoaded] = useState(false);

  // New page: jump to top and set the tab title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? "Page Not Found | Veda Infrastructure";
  }, [pathname]);

  useReveal(null, [pathname, loaded]);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <Header />
      <main>
        <Outlet context={{ loaded }} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
