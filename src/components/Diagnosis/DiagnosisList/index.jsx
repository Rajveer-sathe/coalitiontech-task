import React from "react";
import "./index.css";

function DiagnosisListComp({ showData }) {
  return (
    <div className="diagnosis_list_container">
      <div className="heading">Diagnosis List</div>
      <div className="data">
        <div className="table">
          <div className="head">
            <div>Problem/Diagnosis</div>
            <div>Description</div>
            <div>Status</div>
          </div>
          <div className="table_body_container">
            <div className="patient_diagnostics">
              {showData &&
                showData.length &&
                showData.map((item ,i) => {
                  return (
                    <div className="patient_diagnostics" key={i}>
                      {item?.diagnostic_list &&
                        item.diagnostic_list.length &&
                        item.diagnostic_list.map((ele, i) => {
                          return (
                            <div className="body" key={i}>
                              <div>{ele.name}</div>
                              <div>{ele.description}</div>
                              <div>{ele.status}</div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisListComp;
