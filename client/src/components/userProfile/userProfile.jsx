import "./userProfile.css";

export default function UserProfile() {

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="profile-item">
          <span className="label">Username:</span>
          <span className="value">John Doe</span>
        </div>
        <div className="profile-item">
          <span className="label">Email:</span>
          <span className="value">john_doe@gmail.com</span>
        </div>
        {profile._createdOn && (
          <div className="profile-item">
            <span className="label">Created At:</span>
            <span className="value">31 Mar 2025</span>
          </div>
        )}
        {profile._updatedOn && (
          <div className="profile-item">
            <span className="label">Updated At:</span>
            <span className="value">01 Apr 2025</span>
          </div>
        )}
      </div>
    </div>
  );
}
