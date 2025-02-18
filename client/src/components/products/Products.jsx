import FeatureWatches from "./FeatureWatches";
import NewArrivalsWatches from "./NewArrivalsWatches";
import TopSaleWatches from "./TopSaleWatches";

export default function Products() {
  return (
    <>
      <TopSaleWatches />
      <FeatureWatches />
      <NewArrivalsWatches />
    </>
  );
}
