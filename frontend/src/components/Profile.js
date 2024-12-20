import React from "react";


const Profile = () => {
  return (
    <div className="profile">
      <img src="/images/kevin.jpg" alt="Profile" className="profile-pic" />
      <h6>Kevin</h6>
      <p>UI/UX Designer</p>
      <ul>
        <li>San Francisco, California</li>
        <li>Email: kevin@example.com</li>
        <li>Phone: +1 234-567-890</li>
      </ul>
      <div className="media-gallery">
        <img src="/images/media1.jpg" alt="Media" />
        <img src="/images/media2.jpg" alt="Media" />
        {/* Add more media */}
      </div>
    </div>
  );
};

export default Profile;
