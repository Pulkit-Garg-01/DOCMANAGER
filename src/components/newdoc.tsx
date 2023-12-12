import React, { useState } from 'react';
import { Button, Modal, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';


const NewDocButton = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const userId = localStorage.getItem("userid")
  const authToken = localStorage.getItem("auth_token")

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateDoc = async () => {

    if (!userId || !authToken) {
        console.error('UserId or AuthToken not available.');
        return;
      }
        const docData={
            "Title": title || "Untitled Document",
            "content": "Write",
            "created": new Date().toISOString(),
            "lastModified": new Date().toISOString(),
            "deadline": null,
            "createdBy": userId,
            "lastEditBy": userId
            // "Title": "",
            // "content": "",
            // "created": null,
            // "lastModified": null,
            // "deadline": null,
            // "createdBy": null,
            // "lastEditBy": null
        }
        const headers={
            'Authorization': `Token ${authToken}`,
            'Content-Type': "application/json",

    
          };

    try {
      // Send a POST request to create a new document
      const response = await axios.post('http://localhost:8000/documents/',docData,{headers});

      console.log('Document created:', response.data.id);
      const id= response.data.id;

      window.location.href = `http://localhost:5173/Editor/${id}`;

      // Close the modal
      handleClose();
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
        New Document
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            New Document Details
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleCreateDoc}>
            Create Document
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NewDocButton;
