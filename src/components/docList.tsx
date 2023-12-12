// DocumentList.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

interface Document {
  id: number;
  Title: string;
  // Add other properties as needed
}

const DocumentList: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
//   const history = useHistory();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get<Document[]>('http://localhost:8000/documents/');
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDocumentClick = (documentId: number) => {
    // Redirect to the editor page with the documentId as a parameter
    // history.push(`/editor/${documentId}`);

    window.location.href = `http://localhost:5173/Editor/${documentId}`
  };

  return (
    <div>
      <h2>Your Documents</h2>
      {documents.map((document) => (
        <Button
          key={document.id}
          variant="outlined"
          onClick={() => handleDocumentClick(document.id)}
        >
          {document.Title}
        </Button>
      ))}
    </div>
  );
};

export default DocumentList;
