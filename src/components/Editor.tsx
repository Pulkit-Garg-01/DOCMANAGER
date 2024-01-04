// TextEditor.jsx
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
// import Button from '@mui/material';
import Button from '@mui/material/Button';
import ShareDocument from './ShareDocument';



const TextEditor = () => {
  const [content, setContent] = useState('');
  const { docId } = useParams();
  const [bool,setbool]=useState(false);
  const [tit,settit]=useState('')


  // const handleUserSelect = (user: User) => {
  //   // Handle user selection
  //   console.log('Selected user:', user);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/documents/${docId}`;
        const response = await axios.get(url);
        setContent(response.data.content);
        const userId=localStorage.getItem('userid')
        // const Title=response.data.t
        // console.log("title")
        // console.log(tit)
        // console.log(response.data.Title)
        // const Title=response.data.Title
        settit(response.data.Title)
        console.log(tit)
        // const isUserIdEqualCreatedBy = userId === response?.data?.createdBy;
        const createdBy=response?.data?.createdBy
        setbool(String(userId) === String(createdBy))
        // console.log(userId);
        // console.log(createdBy)
        // console.log(bool)
      } catch (error) {
        console.log('Error fetching document:', error);
      }
    };

    if (docId) {
      fetchData();
    }
  }, [docId]);

  const handleEditorChange = (value:string) => {
    setContent(value);
  };
  const url = `http://localhost:8000/documents/${docId}/`;

  const handleUpdateDocument = async () => {
    try {
      // const url = `http://localhost:8000/documents/${docId}/`;
      const response = await axios.get(url);
  
      // Get the existing document data
      const existingDocument = response.data;
      const authToken=localStorage.getItem('auth_token')
      console.log(authToken);

      const headers={
        // 'Authorization': `Token ${authToken}`,
        'Content-Type': "application/json",

      };
  
      // Update the content field
      existingDocument.content = content;
  
      // Save the updated document
      const updateResponse = await axios.put(url, existingDocument,{headers});
      console.log('Document updated successfully:', updateResponse.data);
    } catch (error) {
      console.log('Error updating document:', error);
    }
    // console.log({content})
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f0f0" // Set your desired background color
    >

      <p style={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }}>{tit}</p>
      <Box
        width="70%" // Adjust the width as needed
        minHeight="500px"
        
        maxWidth="800px" // Set a maximum width if desired
        bgcolor="#cecbca"
        p={3}
        borderRadius={8}
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleEditorChange}
          modules={{
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['code-block'],
              [{ color: [] }, { background: [] }],
              ['link', 'image'],
              ['clean'],
              // ['color'],
              
            ]
          ,
            // formats: ['color', 'background'],
          }}
          style={{ border: '1px solid #ccc', color: 'black' }}
        />
      </Box>
          {/* <Button>Update</Button> */}
          <Button variant="contained" color="primary" onClick={handleUpdateDocument}>
        Update
      </Button>

      
       
       {bool && <ShareDocument documentId={docId} />} 
      
      
    </Box>
    
     
  );



  
};

export default TextEditor;
