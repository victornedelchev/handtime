import { useEffect, useState } from "react";
import { useGetAllWatches } from "../../hooks/useWatches";
import Loader from "../Loader/Loader";
import WatchListItem from "./watch-list-item.jsx/WatchListItem";

export default function TopSaleWatches() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [watches] = useGetAllWatches();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className="product_section ">
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="product_heading">
              <h2>Top Sale Watches</h2>
            </div>
            <form className="search_form">
              <input
                type="text"
                placeholder="Search Watches"
                className="search_bar"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            <div className="product_container">
              {watches.length === 0 && (
                <p className="no-watches">No watches added yet!</p>
              )}
              {watches
                .filter((watch) => {
                  return search.toLowerCase() === ""
                    ? watch
                    : watch.brand.toLowerCase().includes(search.toLowerCase());
                })
                .map((watch) => (
                  <WatchListItem key={watch._id} watch={watch} />
                ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
