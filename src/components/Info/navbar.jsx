import React from 'react';
import './navbar.css';

export default function Navbar({onClickVisualize}) {
  return (
    <div id="nav">
      <div className="wrapper">
        <ul>
          <li className="main">
            <a href="">EncryptionGrid</a>
          </li>
          <li>
            <a href="">Clear Board</a>
          </li>
          <li>
            <a
              href=""
              onClick={e => {
                e.preventDefault();
                onClickVisualize();
              }}>
              Visualize!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
