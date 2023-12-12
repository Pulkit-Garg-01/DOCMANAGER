import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { setUserData } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

const CurrentUser = () => {
  // const [docList, setDocList] = useState([]);
  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");
  const username = params.get("username");
  const auth_token=params.get("auth_token")

  // Store userid and username in localStorage
  if (userid != null && username != null && auth_token != null) {
    localStorage.setItem("userid", userid);
    localStorage.setItem("username", username);
    localStorage.setItem("auth_token",auth_token)
  }

  // Use the useDispatch hook directly within the functional component body
  const dispatch = useDispatch();

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async (username:string) => {
      try {
        const url = `http://localhost:8000/users/${username}`;
        const response = await axios.get(url);
        console.log(response.data);

        // Dispatch an action to set user data in Redux store if needed
        // setUserData(response.data);

        // Check if the request was successful (status code in the range 200-299)
        if (response.status >= 200 && response.status < 300) {
          dispatch(setUserData(response.data));
          console.log("ky haaal bhai!!!!")
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    // Call fetchData only if username is not null
    if (username != null) {
      fetchData(username);
    }
  }, [dispatch, username]);

  return (
    <>
     
     
    </>
  );
};

export default CurrentUser;
