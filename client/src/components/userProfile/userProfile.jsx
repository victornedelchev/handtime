import { useEffect, useState } from "react";
import { useGetProfile } from "../../hooks/useProfile";
import { useGetAllWatches } from "../../hooks/useWatches";
import dateFormatter from "../../utils/dateFormatter";
import Loader from "../Loader/Loader";
import WatchListItem from "../products/watch-list-item.jsx/WatchListItem";
import "./userProfile.css";

export default function UserProfile() {
  const [loading, setLoading] = useState(true);

  const [profile] = useGetProfile();

  const [watches] = useGetAllWatches();

  const userWatches = watches.filter((watch) => watch._ownerId === profile._id);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <h2>User Profile</h2>
        <div className="profile-info">
          <div className="profile-item">
            <span className="label">Username:</span>
            <span className="value">{profile.username}</span>
          </div>
          <div className="profile-item">
            <span className="label">Email:</span>
            <span className="value">{profile.email}</span>
          </div>
          {profile._createdOn && (
            <div className="profile-item">
              <span className="label">Created At:</span>
              <span className="value">{dateFormatter(profile._createdOn)}</span>
            </div>
          )}
          {profile._updatedOn && (
            <div className="profile-item">
              <span className="label">Updated At:</span>
              <span className="value">{dateFormatter(profile._updatedOn)}</span>
            </div>
          )}
        </div>
      </div>
      <section className="product_section ">
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="product_heading">
              <h2>Your watches</h2>
            </div>
            <div className="product_container">
              {userWatches.length === 0 && (
                <p className="no-watches">You haven't added any watches yet.</p>
              )}
              {userWatches.map((watch) => (
                <WatchListItem key={watch._id} watch={watch} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
