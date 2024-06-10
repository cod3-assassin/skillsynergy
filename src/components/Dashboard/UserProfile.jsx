import React from "react";

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <p className="text-lg">Name: John Doe</p>
        <p className="text-lg">Email: john.doe@example.com</p>
        {/* Add more profile details as necessary */}
      </div>
    </div>
  );
};

export default UserProfile;
