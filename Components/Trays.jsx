import React from "react";
import GRID_SMALL_LANDSCAPE_LAYOUT from "./SliderLayoutComponent/GRID_SMALL_LANDSCAPE_LAYOUT";
import LANDSCAPE_LAYOUT from "./SliderLayoutComponent/LANDSCAPE_LAYOUT";
import PORTRAIT_LAYOUT from "./SliderLayoutComponent/PORTRAIT_LAYOUT";
import SMALL_LANDSCAPE_LAYOUT from "./SliderLayoutComponent/SMALL_LANDSCAPE_LAYOUT";
import SQUARE_LAYOUT from "./SliderLayoutComponent/SQUARE_LAYOUT";
import SEASION_EPISODE_LAYOUT from "./SliderLayoutComponent/SEASION_EPISODE_LAYOUT";
import GRID from "./SliderLayoutComponent/GRID.jsx";
import NoDataFound from "./NoDataFound";

function Trays({ Data }) {
  return (
    <>
      <div
        style={{
          background: "#061326",
        }}
      >
        {Data &&
          Data.map((x) => (
            <>
              {/* "GRID" */}
              {x.layout === "GRID" ? (
                <GRID
                  title_position={x.item_title_position}
                  title={x.title}
                  uri={x.uri}
                  retrieve_uri={x.retrieve_uri}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}

              {x.layout === "GRID_SMALL_LANDSCAPE_LAYOUT" ? (
                <GRID_SMALL_LANDSCAPE_LAYOUT
                  title_position={x.item_title_position}
                  title={x.title}
                  uri={x.uri}
                  retrieve_uri={x.retrieve_uri}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}
              {/* LANDSCAPE_LAYOUT */}
              {x.layout === "LANDSCAPE_LAYOUT" ? (
                <LANDSCAPE_LAYOUT
                  title_position={x.item_title_position}
                  title={x.title}
                  uri={x.uri}
                  retrieve_uri={x.retrieve_uri}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}
              {/* PORTRAIT_LAYOUT */}
              {x.layout === "PORTRAIT_LAYOUT" ? (
                <PORTRAIT_LAYOUT
                  title_position={x.item_title_position}
                  title={x.title}
                  uri={x.uri}
                  retrieve_uri={x.retrieve_uri}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}
              {/* SQUARE_LAYOUT */}
              {x.layout === "SQUARE_LAYOUT" ? (
                <SQUARE_LAYOUT
                  title_position={x.item_title_position}
                  title={x.title}
                  uri={x.uri}
                  retrieve_uri={x.retrieve_uri}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}
              {/* SMALL_LANDSCAPE_LAYOUT */}
              {x.layout === "SMALL_LANDSCAPE_LAYOUT" ? (
                <SMALL_LANDSCAPE_LAYOUT
                  title_position={x.item_title_position}
                  title={x.title}
                  uri={x.uri}
                  retrieve_uri={x.retrieve_uri}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}
              {/* seasons slider */}
              {x.layout === "SEASION_EPISODE_LAYOUT" ? (
                <SEASION_EPISODE_LAYOUT
                  title_position={x.item_title_position}
                  title={x.title}
                  items={x.items ? x.items : x.trays}
                />
              ) : null}
            </>
          ))}
      </div>
    </>
  );
}

export default Trays;
