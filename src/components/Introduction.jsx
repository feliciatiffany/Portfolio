import React from "react";

export default function Introduction({ intro = "", meta = {} }) {
  const { category = [], year = "", tools = [] } = meta;

  return (
    <div className="proj-row3">
      <div className="proj-row3__left">
        <p className="proj-text">{intro}</p>
      </div>

      <div className="proj-row3__right">
        <dl className="proj-meta">
          {category?.length > 0 && (
            <div className="proj-meta__item">
              <dt><b>Category</b></dt>
              <dd>{category.join(", ")}</dd>
            </div>
          )}
          {year && (
            <div className="proj-meta__item">
              <dt><b>Year</b></dt>
              <dd>{year}</dd>
            </div>
          )}
          {tools?.length > 0 && (
            <div className="proj-meta__item">
              <dt><b>Tools</b></dt>
              <dd>{tools.join(", ")}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
