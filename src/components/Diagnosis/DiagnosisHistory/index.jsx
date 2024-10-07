import React from "react";
import { Line } from "react-chartjs-2";
import "./index.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import Respiratory from "../../../assets/respiratory.png";
import temperature from "../../../assets/temperature@2x.png";
import heart from "../../../assets/HeartBPM@2x.png";
import Expand from "../../../assets/Expand.svg";
import ArrowUp from "../../../assets/ArrowUp@2x.png";
import ArrowDown from "../../../assets/ArrowDown.svg";

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const otherData = [
  {
    name: "Respiratory Rate",
    img: Respiratory,
    value: "20 bpm ",
    extra: "Normal",
    background: "",
  },
  {
    name: "Temprerature",
    img: temperature,
    value: "98.6° F ",
    extra: "Normal",
    background: "#FFE6E9",
  },
  {
    name: "Heart Rate",
    img: heart,
    value: "78 bpm ",
    extra: "Lower than average",
    background: "#FFE6F1",
  },
];

function DiagnosisHistoryComp({ showData }) {
  const diagnosisHistory = showData.find((item) => item.diagnosis_history);
  const systolic = diagnosisHistory?.diagnosis_history?.map(
    (month) => month.blood_pressure.systolic.value
  );
  const diastolic = diagnosisHistory?.diagnosis_history?.map(
    (month) => month.blood_pressure.diastolic.value
  );

  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "",
        data: systolic,
        fill: false,
        borderColor: "#E66FD2",
        borderWidth: 2,
        tension: 0.4,
        pointStyle: "circles",
        pointRadius: 6,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
      },
      {
        label: "",
        data: diastolic,
        fill: false,
        borderColor: "#8C6FE6",
        borderWidth: 2,
        tension: 0.4,
        pointStyle: "circles",
        pointRadius: 6,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#fff",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          reverse: true,
          stepSize: 20,
        },
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="diagnosis_history_container">
      <div className="heading">Diagnosis List</div>
      <div className="patient_diagnostic">
        <div className="chart">
          <div className="diagnosis_history_left">
            <div className="chart_heading_container">
              <div className="chart_heading">Blood Pressure</div>
              <div className="measure">
                Last 6 months <img src={Expand} alt="" />{" "}
              </div>
            </div>
            <Line data={data} options={options} />
          </div>
          <div className="diagnosis_history_right">
            <div className="systolic_info_container">
              <div className="systolic_title">
                <div className="systolic_circle"></div>
                <div className="title">Systolic</div>
              </div>
              <div className="systolic_value">160</div>
              <div className="extra_info">
                <img src={ArrowUp} alt="" />
                Higher than Average
              </div>
            </div>
            <div className="disgnostic_hr"></div>
            <div className="diastolic_info_container">
              <div className="diastolic_title">
                <div className="diastolic_circle"></div>
                <div className="title">Diastolic</div>
              </div>
              <div className="diastolic_value">78</div>
              <div className="extra_info">
                <img src={ArrowDown} alt="" />
                Lower than Average
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="other_data">
        {otherData.map((data, i) => (
          <div
            className="patient_data_card"
            key={i}
            style={{ backgroundColor: `${data.background}` }}
          >
            <div className="img">
              <img src={data.img} alt="" />
            </div>
            <div className="info">
              <div className="name">{data.name}</div>
              <div className="value">{data.value}</div>
              <div className="extra">{data.extra}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiagnosisHistoryComp;
