import { useGetLatestWatches } from "../../hooks/useWatches";
import WatchListItem from "./watch-list-item.jsx/WatchListItem";

export default function NewArrivalsWatches() {
  const [watches, setWatches] = useGetLatestWatches();

  return (
    <section className="product_section ">
      <div className="container">
        <div className="product_heading">
          <h2>New Arrivals</h2>
        </div>
        <div className="product_container">
          {watches.map((watch) => (
            <WatchListItem key={watch._id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  );
}
