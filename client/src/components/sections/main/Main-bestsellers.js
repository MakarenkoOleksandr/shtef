import img from "../../../img/bestseller.jpeg";

const MainBestSellers = () => {
  return (
    <section className="main__bestsellers">
      <div className=" container">
        <h2 className="main__bestsellers-title">BestSellers</h2>
        <div className="main__bestsellers-items">
          <div className="main__bestsellers-item bestseller">
            <img className="bestseller__img" src={img} alt="img"></img>
            <h3 className="bestseller__model">Product Name</h3>
            <p className="bestseller__price">999$</p>
            <button className="bestseller__btn">Add to cart</button>
          </div>
          <div className="main__bestsellers-item bestseller">
            <img className="bestseller__img" src={img} alt="img"></img>
            <h3 className="bestseller__model">Product Name</h3>
            <p className="bestseller__price">999$</p>
            <button className="bestseller__btn">Add to cart</button>
          </div>
          <div className="main__bestsellers-item bestseller">
            <img className="bestseller__img" src={img} alt="img"></img>
            <h3 className="bestseller__model">Product Name</h3>
            <p className="bestseller__price">999$</p>
            <button className="bestseller__btn">Add to cart</button>
          </div>
          <div className="main__bestsellers-item bestseller">
            <img className="bestseller__img" src={img} alt="img"></img>
            <h3 className="bestseller__model">Product Name</h3>
            <p className="bestseller__price">999$</p>
            <button className="bestseller__btn">Add to cart</button>
          </div>
          <div className="main__bestsellers-item bestseller">
            <img className="bestseller__img" src={img} alt="img"></img>
            <h3 className="bestseller__model">Product Name</h3>
            <p className="bestseller__price">999$</p>
            <button className="bestseller__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBestSellers;
