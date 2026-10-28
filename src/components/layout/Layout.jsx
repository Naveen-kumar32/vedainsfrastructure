import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
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

  // New page: jump to top and set the tab title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? "Page Not Found | Veda Infrastructure";
  }, [pathname]);

  useReveal(null, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
