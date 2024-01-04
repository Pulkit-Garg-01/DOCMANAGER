// import React, { useState, useEffect, ChangeEvent } from 'react';
// import axios from 'axios';

// interface User {
//   id: number;
//   username: string;
// }

// interface ShareDocumentProps {
//   documentId?: string;
// }

// const ShareDocument: React.FC<ShareDocumentProps> = ({ documentId }) => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<number | ''>('');
//   const [selectedPermission, setSelectedPermission] = useState<string>('');

//   useEffect(() => {
//     // Fetch the list of users from the backend
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get<User[]>('http://localhost:8000/users/');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleShare = async () => {
//     try {
//       // Send a request to the backend to create a permission record
//       const response = await axios.post('http://localhost:8000/permissions/', {
//         userId: selectedUser,
//         docId: documentId,
//         permission: selectedPermission,
//       });

//       console.log('Document shared:', response.data);

//       // Reset the form
//       setSelectedUser('');
//       setSelectedPermission('');
//     } catch (error) {
//       console.error('Error sharing document:', error);
//     }
//   };

//   return (
//     <div>
//       <label>Select User:</label>
//       <select value={selectedUser} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedUser(Number(e.target.value))}>
//         <option value="">Select User</option>
//         {users.map((user) => (
//           <option key={user.id} value={user.id}>
//             {user.username}
//           </option>
//         ))}
//       </select>

//       <label>Select Permission:</label>
//       <select
//         value={selectedPermission}
//         onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedPermission(e.target.value)}
//       >
//         <option value="">Select Permission</option>
//         <option value="R">Read Only</option>
//         <option value="RW">Read and Write</option>
//       </select>

//       <button onClick={handleShare}>Share</button>
//     </div>
//   );
// };

// export default ShareDocument;


import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
}

interface ShareDocumentProps {
  documentId?: string;
}

const ShareDocument: React.FC<ShareDocumentProps> = ({ documentId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | ''>('');
  const [selectedPermission, setSelectedPermission] = useState<string>('');

  useEffect(() => {
    // Fetch the list of users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:8000/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleShare = async () => {
    try {
      // Send a request to the backend to create a permission record
      const response = await axios.post('http://localhost:8000/permissions/', {
        userId: selectedUser,
        docId: documentId,
        permission: selectedPermission,
      });

      console.log('Document shared:', response.data);

      // Reset the form
      setSelectedUser('');
      setSelectedPermission('');
    } catch (error) {
      console.error('Error sharing document:', error);
    }
  };

  return (
    <div style={{ color: 'black', padding: '10px', borderRadius: '8px' }}>
      <label>Select User:</label>
      <select
        value={selectedUser}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedUser(Number(e.target.value))}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>

      <label>   Select Permission:</label>
      <select
        value={selectedPermission}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedPermission(e.target.value)}
      >
        <option value="">Select Permission</option>
        <option value="R">Read Only</option>
        <option value="RW">Read and Write</option>
      </select>

      <button style={{ marginTop: '10px' }} onClick={handleShare}>
        Share
      </button>
    </div>
  );
};

export default ShareDocument;
