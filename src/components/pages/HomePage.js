import MainBestSellers from "../sections/main/Main-bestsellers";
import MainSlider from "../sections/main/Main-slider";
import TopSale from "../sections/main/Main-topsale";

const HomePage = () => {
  return (
    <main className="main">
      <MainSlider />
      <MainBestSellers />
      <TopSale />
    </main>
  );
};

export default HomePage;
