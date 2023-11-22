import { useState } from "react";
import Ads from "./Ads";
import Product from "./Product";
import MainContainer from "../../Layout/MainContainer";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  return (
    <MainContainer>
      <Ads />
      <Product title="Trending Products" />
      <Product title="Electronic Items" />
      <Product title="Laptop Items" />
    </MainContainer>
  );
};

export default Home;
