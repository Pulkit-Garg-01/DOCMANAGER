import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Modal, Button } from "@mui/material";
import Backdrop from "@mui/material";

const LogoutButton: React.FC = () => {
  // const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Display the confirmation modal
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    // Perform logout actions (e.g., clear session, remove tokens, etc.)

    // Redirect to a new URL after logout
    window.location.href = "http://localhost:5173/login";

    // Close the modal
    setShowModal(false);
  };

  const handleCancelLogout = () => {
    // Close the modal without logging out
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      {/* Confirmation Modal */}
      <Modal open={showModal} onClose={handleCancelLogout} style={{
              backdropFilter: "blur(15px)",
              background: "rgba(2, 2, 2, 0.8)",
              borderRadius: "8px",
              padding: "16px",
            }}>
        <div
        >
          <p>Are you sure you want to logout?</p>
          <Button onClick={handleConfirmLogout}>Yes</Button>
          <Button onClick={handleCancelLogout}>No</Button>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutButton;
