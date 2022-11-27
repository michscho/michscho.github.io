import React from 'react';

const SectionGallery = () => (
  <section id="gallery" className="bg-gray-1">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12 text-center">
          <div className="title-block">
            <h1>
              Foto{' '}
              <span>
                <em>Gallerie</em>
              </span>
            </h1>
            <div className="divider" />
            <p>
              <em>
                Unsere Bilder.
              </em>
            </p>
            <div className="gallery_nav">
              <button
                className="btn btn-primary btn-bordered filter-button active"
                data-filter="all"
              >
                All
              </button>
              <button
                className="btn btn-primary btn-bordered filter-button"
                data-filter="gallery-family"
              >
                Family
              </button>
              <button
                className="btn btn-primary btn-bordered filter-button"
                data-filter="gallery-friends"
              >
                Friends
              </button>
              <button
                className="btn btn-primary btn-bordered filter-button"
                data-filter="gallery-trips"
              >
                Trips
              </button>
              <button
                className="btn btn-primary btn-bordered filter-button"
                data-filter="gallery-portraits"
              >
                Portraits
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row gallery-popup">
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-family">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-friends">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-family">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-portraits">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-trips">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-portraits">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-trips">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-portraits">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-portraits">
          <a
            href="http://via.placeholder.com/590x393"
            className="mfp-image"
            title="Gallery image title"
          >
            <img
              src="http://via.placeholder.com/590x393"
              className="img-responsive"
              alt="Gallery image"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SectionGallery;
