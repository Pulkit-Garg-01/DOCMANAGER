

import React, { useEffect } from "react"
import Navbar from "../components/navbar"
import TextEditor from "../components/Editor"
// import Sidebar from "../components/sidebar"

export default function DocPage(){
    return(
        <>
        <Navbar/>
        <div >
            <TextEditor/>
            <div >
                {/* This is index page */}
            </div>
        </div>
        
        </>

    )

};

// export default Docpage;/