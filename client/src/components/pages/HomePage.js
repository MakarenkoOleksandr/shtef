import MainBestSellers from "../sections/main/Main-bestsellers";
import MainSlider from "../sections/main/Main-slider";
import MainTopSale from "../sections/main/Main-topsale";
import MainAccessories from "../sections/main/Main-accessories";

const HomePage = () => {
  return (
    <main className="main">
      <MainSlider />
      <MainBestSellers />
      <MainTopSale />
      <MainAccessories />
    </main>
  );
};

export default HomePage;
