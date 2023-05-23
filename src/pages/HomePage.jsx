import ProductComponent from "../components/ProductComponent";
import BannerComponent from "../components/BannerComponent";

const HomePage = () => {
  return (
    <div className="homepage">
      <BannerComponent />
      <ProductComponent />
    </div>
  );
};

export default HomePage;
