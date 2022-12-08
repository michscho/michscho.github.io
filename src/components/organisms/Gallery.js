import React from "react";

const SectionGallery = () => (
  <section id="gallery" className="bg-gray-1">
    <div className="container">
      <div className="row">
        <div className="title-block">
          <h1>
            Foto{" "}
            <span>
              <em>Gallerie</em>
            </span>
          </h1>
          <div className="divider" />
          <p>
            <em>Hier findest du nach der Hochzeit die Bildergallerie.</em>
          </p>
          <div className="gallery_nav">
            <button
              className="btn btn-primary btn-bordered filter-button active"
              data-filter="all"
            >
              Alle
            </button>
            <button
              className="btn btn-primary btn-bordered filter-button"
              data-filter="gallery-family"
            >
              Familie
            </button>
            <button
              className="btn btn-primary btn-bordered filter-button"
              data-filter="gallery-friends"
            >
              Freunde
            </button>
            <button
              className="btn btn-primary btn-bordered filter-button"
              data-filter="gallery-trips"
            >
              Portraits
            </button>
          </div>
        </div>
      </div>
      <div className="row gallery-popup"></div>
    </div>
  </section>
);

export default SectionGallery;
