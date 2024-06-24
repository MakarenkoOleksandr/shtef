import img from "../../../img/topsale.jpeg";

const TopSale = () => {
  return (
    <section className="main__topsale">
      <div className=" container">
        <h2 className="main__topsale-title">Top Sales</h2>
        <div className="main__topsale-items">
          <div className="main__topsale-item topsale">
            <img className="topsale__img" src={img} alt="img"></img>
            <h3 className="topsale__model">Product Name</h3>
            <p className="topsale__price">999$</p>
            <button className="topsale__btn">Add to cart</button>
          </div>
          <div className="main__topsale-item topsale">
            <img className="topsale__img" src={img} alt="img"></img>
            <h3 className="topsale__model">Product Name</h3>
            <p className="topsale__price">999$</p>
            <button className="topsale__btn">Add to cart</button>
          </div>
          <div className="main__topsale-item topsale">
            <img className="topsale__img" src={img} alt="img"></img>
            <h3 className="topsale__model">Product Name</h3>
            <p className="topsale__price">999$</p>
            <button className="topsale__btn">Add to cart</button>
          </div>
          <div className="main__topsale-item topsale">
            <img className="topsale__img" src={img} alt="img"></img>
            <h3 className="topsale__model">Product Name</h3>
            <p className="topsale__price">999$</p>
            <button className="topsale__btn">Add to cart</button>
          </div>
          <div className="main__topsale-item topsale">
            <img className="topsale__img" src={img} alt="img"></img>
            <h3 className="topsale__model">Product Name</h3>
            <p className="topsale__price">999$</p>
            <button className="topsale__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSale;
