import React from "react";

export default function Introduction({ intro = "", meta = {} }) {
  const { category = "", year = "", tools = [] } = meta;

  const categoryArr =
    Array.isArray(category) ? category : category ? [category] : [];

  const toolsArr =
    Array.isArray(tools) ? tools : tools ? [tools] : [];

  return (
    <div className="proj-row3">
      <div className="proj-row3__left">
        <p className="proj-text">{intro}</p>
      </div>

      <div className="proj-row3__right">
        <dl className="proj-meta">
          {categoryArr.length > 0 && (
            <div className="proj-meta__item">
              <dt><b>Category</b></dt>
              <dd>{categoryArr.join(", ")}</dd>
            </div>
          )}

          {year && (
            <div className="proj-meta__item">
              <dt><b>Year</b></dt>
              <dd>{String(year)}</dd>
            </div>
          )}

          {toolsArr.length > 0 && (
            <div className="proj-meta__item">
              <dt><b>Tools</b></dt>
              <dd>{toolsArr.join(", ")}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
