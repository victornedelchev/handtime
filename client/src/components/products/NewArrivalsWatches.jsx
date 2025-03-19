import { useGetLatestWatches } from "../../hooks/useWatches";
import Loader from "../Loader/Loader";
import WatchListItem from "./watch-list-item.jsx/WatchListItem";

export default function NewArrivalsWatches() {
  const [watches] = useGetLatestWatches();

  return (
    <section className="product_section ">
      <div className="container">
        <div className="product_heading">
          <h2>New Arrivals</h2>
        </div>
        <div className="product_container">
          {watches.length === 0 && <Loader />}
          {watches.map((watch) => (
            <WatchListItem key={watch._id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  );
}
