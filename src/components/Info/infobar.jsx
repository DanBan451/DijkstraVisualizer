import React from 'react';
import './infobar.css';
import {
  FaAngleRight,
  FaDotCircle,
  FaBomb,
  FaWeightHanging,
  FaRegSquare,
} from 'react-icons/fa';

export default function InfoBar() {
  return (
    <div id="info">
      <div className="wrapper">
        <ul>
          <li>
            <FaAngleRight style={{color: 'white'}} />
            <span>Start Node</span>
          </li>
          <li>
            <FaDotCircle style={{color: 'white'}} />
            <span>Target Node</span>
          </li>
          <li>
            <FaRegSquare style={{color: 'white'}} />
            <span>Unvisited Node</span>
          </li>
          <li>
            <FaRegSquare style={{color: 'aqua', backgroundColor: 'aqua'}} />
            <span>Visited Nodes</span>
          </li>
          <li>
            <FaRegSquare style={{color: 'red', backgroundColor: 'red'}} />
            <span>Shortest Path Node</span>
          </li>
          <li>
            <FaRegSquare style={{color: 'white', backgroundColor: 'white'}} />
            <span>Wall Node</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
