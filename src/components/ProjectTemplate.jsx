import React from "react";
import { Link, NavLink } from "react-router-dom";

import Introduction from "./Introduction.jsx";
import ImagesRow from "./ImagesRow.jsx";
import Description1 from "./DescriptionProject1.jsx";
import ImagesSlider from "./ImagesSlider.jsx";


import LogoUrl from "../assets/logosmall.png"; 
import "../style/projectStyle.css"; 

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `proj-nav__link ${isActive ? "is-active" : ""}`}
    >
      {children}
    </NavLink>
  );
}

export default function ProjectTemplate({ project }) {
  return (
    <div className="project-template">
      {/* ROW 1 */}
      <header className="proj-head">
        <Link to="/" className="proj-logo" aria-label="Go to home">
          <img src={LogoUrl} alt="" aria-hidden />
        </Link>

        <div className="proj-head__text">Hi, I’m Fany and now you are seeing</div>
        <h1 className="proj-head__title">{project.title}</h1>
      </header>

      {/* ROW 2 */}
      <nav className="proj-nav" aria-label="Main navigation">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/tech">Tech Designer</NavItem>
        <NavItem to="/graphic">Graphic Designer</NavItem>
        <NavItem to="/anything">Others</NavItem>
      </nav>

      {/* ROW 3–5 */}
      <div className="proj-body">
        <section className="proj-section proj-section--3">
          <Introduction intro={project.intro} meta={project.meta} />
        </section>

        <section className="proj-section proj-section--4">
          <ImagesRow media={project.media} />
        </section>

        <section className="proj-section proj-section--5">
          <Description1 left={project.descLeft} right={project.descRight} />
        </section>

{/* Row 6 (optional) */}
{project.slider?.items?.length ? (
  <ImagesSlider title={project.slider.title} items={project.slider.items} />
) : null}
      </div>
    </div>
  );
}
