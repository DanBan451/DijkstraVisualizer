import React, {Component} from 'react';
// import {default as start} from '../../../images/chev-icon.png';
// import {default as finish} from '../../../images/finish-icon.png';
import {default as wall} from '../../../images/square-icon.png';
import {default as start} from '../../../images/chev-icon.png';
import {default as finish} from '../../../images/select-icon.png';
import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      isFloat,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const icon = isFinish ? finish : isStart ? start : isWall ? wall : '';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${isFloat && 'float'}`}
        onMouseDown={e => onMouseDown(e, row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
        style={{backgroundImage: `url(${icon})`}}></div>
    );
  }
}
