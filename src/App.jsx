// src/App.jsx
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

import Home from "./pages/Home.jsx";
import TechDesigner from "./pages/TechDesigner.jsx";
import GraphicDesigner from "./pages/GraphicDesigner.jsx";
import Anything from "./pages/Anything.jsx";
import About from "./pages/About.jsx";
import Category from "./pages/Category.jsx";
import Project from "./pages/Project.jsx"; // ✅ project detail page

import LogoUrl from "./assets/logosmall.png";

function LogoMark() {
  return (
    <Link to="/" aria-label="Go to home" className="logo-link">
      <img src={LogoUrl} alt="Fany logo" className="logo" />
    </Link>
  );
}

function Layout({ children }) {
  const { pathname } = useLocation();
  const onProject = pathname.startsWith("/work/");

  return (
    <div className={`page-grid ${onProject ? "page-grid--project" : ""}`}>
      {!onProject && (
        <header className="header" aria-label="Brand">
          <LogoMark />
        </header>
      )}

      <main className={`main ${onProject ? "main--project" : ""}`}>{children}</main>

       {!onProject && (
      <footer className="foot">
        <a href="mailto:feliciatiffany@gmail.com" className="foot-link">gmail</a>
        <span aria-hidden> · </span>
        <a
          href="https://www.linkedin.com/in/feliciatiffanyh/"
          target="_blank"
          rel="noreferrer"
          className="foot-link"
        >
          linkedin
        </a>
        <span aria-hidden> · </span>
        <a
          href="https://linktr.ee/feliciatiffanyh"
          target="_blank"
          rel="noreferrer"
          className="foot-link"
        >
          linktree
        </a>
      </footer>
       )}
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />

        {/* pages (support both lowercase + your existing uppercase links) */}
        <Route path="/tech" element={<TechDesigner />} />
        <Route path="/Tech" element={<TechDesigner />} />

        <Route path="/graphic" element={<GraphicDesigner />} />
        <Route path="/Graphic" element={<GraphicDesigner />} />

        <Route path="/anything" element={<Anything />} />
        <Route path="/Anything" element={<Anything />} />

        <Route path="/about" element={<About />} />
        <Route path="/About" element={<About />} />

        {/* project detail */}
        <Route path="/work/:slug" element={<Project />} />

        {/* optional category route */}
        <Route path="/:categorySlug" element={<Category />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}


