import React from "react";

import { Link } from "react-router-dom";

function Status(){
    return (
        <div className="Status">
          <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
          <li>
            <Link to="/status">Status</Link>
          </li>
          <li>
            <Link to="/Input">Login</Link>
          </li>
        </ul>
      </nav>
            <h1>บันทึกจองห้องเรียน</h1>

            <h1> รายการการจองห้องเรียนของท่าน </h1>

        </div>
    )
}

export default Status;