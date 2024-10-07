import React from "react";
import DownloadIcon from "../../assets/DownloadIcon.png";
import "./index.css";

function LabResultComp({ showData }) {
  return (
    <div className="lab_results_container">
      <div className="heading">Lab Results</div>
      <div className="lab_results_data">
        <ul>
          {showData && showData.length ? (
            showData.map((item, i) => {
              return (
                <ul key={i}>
                  {item?.lab_results &&
                    item?.lab_results.length &&
                    item.lab_results.map((ele, i) => {
                      return (
                        <li key={i}>
                          {ele}
                          <img src={DownloadIcon} alt="" />
                        </li>
                      );
                    })}
                </ul>
              );
            })
          ) : (
            <div className="loading">Loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LabResultComp;
