import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Côte d'Ivoire E-Commerce"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 fw-lighter">
                🇨🇮 Nouvelle Collection Ivoirienne
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Découvrez notre sélection de produits aux couleurs de la Côte
                d'Ivoire. Orange, Blanc, Vert - L'excellence à l'ivoirienne !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
