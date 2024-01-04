import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import TextEditor from "../components/Editor";
// import Sidebar from "../components/sidebar"
import { Button } from "@mui/material";
import NewDocButton from "../components/newdoc";
import DocumentList from "../components/docList";
import CurrentUser from "../components/currentUser";
import SharedDocumentList from "../components/sharedDocList";



export default function Dashboard() {
  return (
    <>
      <CurrentUser/>
      <Navbar />
      <NewDocButton/>
      <DocumentList/>
      <SharedDocumentList/>
      <div>
        {/* <TextEditor/> */}
        {/* <div>This is index page</div> */}
        {/* <button> Update</button> */}
      </div>
    </>
  );
}
