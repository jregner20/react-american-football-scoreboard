import React, {useState} from "react";
import "./App.css";

const BottomRow = (props) => {
  // const [down, setDown] = useState(1);
  // const [qtr, setQuarter] = useState(1);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{props.down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.qtr}</div>
      </div>
      {/* <div className="otherButtons">
          <button className="quarterButton" onClick= { () => setQuarter(qtr + 1)}>Quarter</button>
          <button className="downButton" onClick= { () => setDown(down + 1)}>Down</button>
      </div> */}
    </div>
  );
};

export default BottomRow;
