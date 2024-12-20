import React from "react";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Search Contact" />
      </div>
      <div className="contacts-section">
        <h5>Contacts</h5>
        <div className="contact">
          <img src="/images/user1.jpg" alt="Jonathan" />
          <h6>Jonathan</h6>
          <p>Online</p>
          <div className="status online"></div>
        </div>
        {/* Add more contacts */}
      </div>
      <div className="groups-section">
        <h5>Groups</h5>
        <div className="group">App Development</div>
        {/* Add more groups */}
      </div>
    </div>
  );
};

export default Sidebar;
