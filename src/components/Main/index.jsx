import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import PatientsList from "../PatientList";
import SelectedPatientComp from "../SelectedPatient";
import { useSelector } from "react-redux";
import DiagnosisListComp from "../Diagnosis/DiagnosisList";
import LabResultComp from "../LabResult";
import DiagnosisHistoryComp from "../Diagnosis/DiagnosisHistory";
import "./index.css";

const MainComp = () => {
  const [showData, setShowData] = useState([]);
  const { data, selectedPatient } = useSelector((state) => state?.data);

  const fetchPatientData = (data) => {
    const initialData = data.filter((items) => items.name === "Jessica Taylor");
    setShowData(initialData);
  };

  const onhandleData = (patient) => {
    if (selectedPatient) {
      setShowData([patient]);
    }
  };
  useEffect(() => {
    if (data) fetchPatientData(data);
  }, [data]);
  return (
    <div className="main_container">
      <Card
        child={<PatientsList onhandleData={onhandleData} />}
        width="20%"
        height="920px"
        padding="1rem 0"
      />
      <div className="diagnosis">
        <Card
          child={<DiagnosisHistoryComp showData={showData} />}
          width="90%"
          height="50%"
          padding="1rem 2rem"
        />
        <Card
          child={<DiagnosisListComp showData={showData} />}
          width="90%"
          height="50%"
          padding="1rem 2rem"
        />
      </div>
      <div className="selectedPatientContainer">
        <Card
          child={<SelectedPatientComp showData={showData} />}
          width="100%"
          height="auto"
          padding="1rem 2rem"
        />
        <Card
          child={<LabResultComp showData={showData} />}
          width="100%"
          height="300px"
          padding="1rem 2rem"
        />
      </div>
    </div>
  );
};

export default MainComp;
