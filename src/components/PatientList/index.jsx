import React from "react";
import Search from "../../assets/Search.png";
import Options from "../../assets/HorizontalOptions.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectPatient } from "../../store/action/action";
import "./index.css";

function PatientsList({ onhandleData }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.data);
  const handleSelectPatient = (patient) => {
    onhandleData(patient);
    dispatch(selectPatient(patient));
  };
  return (
    <div className="patients_list_container">
      <div className="list_top">
        <div className="heading">Patients</div>
        <div className="search">
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="patients">
        {data && data.length > 0 ? (
          <div className="patients_list">
            {data.map((patient, i) => (
              <div
                className="patient_card"
                key={i}
                onClick={() => handleSelectPatient(patient)}
              >
                <div className="patient_all">
                  <div className="patient_img">
                    <img src={patient.profile_picture} alt="" />
                  </div>
                  <div className="patient_info">
                    <div className="name">{patient.name}</div>
                    <div className="info">
                      {patient.gender}, {patient.age}
                    </div>
                  </div>
                </div>
                <div className="patient_option">
                  <img src={Options} alt="" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default PatientsList;
