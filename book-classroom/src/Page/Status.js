import React from "react";

import { Link } from "react-router-dom";

function Status(){
    return (
        <div className="Status">
          <nav>
        <ul>
          <li>
            <Link to="/Input">Logout</Link>
          </li>
          <li>
            <Link to="/status">Status</Link>
          </li>
          <li>
          <Link to="/reserve">Reserve</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <p>บันทึกจองห้องเรียน</p>
      </nav>
        </div>
    )
    
}

export default Status;
