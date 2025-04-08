import { useGetLatestWatches } from "../../hooks/useWatches";
import Loader from "../loader/Loader";
import WatchListItem from "./watch-list-item.jsx/WatchListItem";
import useLoadingEffect from "../../hooks/useLoadingEffect";

export default function NewlyAddedWatches() {
  const [isLoading] = useLoadingEffect();
  const [watches] = useGetLatestWatches();

  return (
    <section className="product_section ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="product_heading">
            <h2>Newly Added</h2>
          </div>
          <div className="product_container">
            {watches.length === 0 && (
              <p className="no-watches">No watches added yet!</p>
            )}
            {watches.map((watch) => (
              <WatchListItem key={watch._id} watch={watch} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
