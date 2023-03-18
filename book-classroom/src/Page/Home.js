import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><a href="#home">Home</a></Link>
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
      <h1>Home page</h1>
    </div>
  );
}

export default Home;
