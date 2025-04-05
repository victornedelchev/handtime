import { useState } from "react";
import { useGetAllWatches } from "../../hooks/useWatches";
import Loader from "../Loader/Loader";
import WatchListItem from "./watch-list-item.jsx/WatchListItem";
import useLoadingEffect from "../../hooks/useLoadingEffect";

export default function AllWatches() {
  const [isLoading] = useLoadingEffect();
  const [search, setSearch] = useState("");
  const [watches] = useGetAllWatches();

  return (
    <>
      <section className="product_section ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="product_heading">
              <h2>All Watches</h2>
            </div>
            {watches.length > 0 && (
              <form className="search_form">
                <input
                  type="text"
                  placeholder="Search Watches"
                  className="search_bar"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            )}
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
