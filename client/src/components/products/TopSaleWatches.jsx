import { useEffect, useState } from "react";
import { useGetAllWatches } from "../../hooks/useWatches";
import Loader from "../Loader/Loader";
import WatchListItem from "./watch-list-item.jsx/WatchListItem";

export default function TopSaleWatches() {
  const [loading, setLoading] = useState(true);
  const [watches] = useGetAllWatches();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="product_section ">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="product_heading">
            <h2>Top Sale Watches</h2>
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
