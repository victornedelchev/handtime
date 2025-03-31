import { useGetProfile } from "../../hooks/useProfile";
import dateFormatter from "../../utils/dateFormatter";
import "./userProfile.css";

export default function UserProfile() {
  const [profile] = useGetProfile();

  return (
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
  );
}
