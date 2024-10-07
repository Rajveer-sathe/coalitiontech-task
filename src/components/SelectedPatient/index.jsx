import React, { Fragment } from "react";
import { FormatDate } from "../../utils/formatDate";
import BirthIcon from "../../assets/svgs/BirthIcon.svg";
import FemaleIcon from "../../assets/svgs/FemaleIcon.svg";
import PhoneIcon from "../../assets/svgs/PhoneIcon.svg";
import InsuranceIcon from "../../assets/svgs/InsuranceIcon.svg";
import "./index.css";

const SelectedPatientComp = ({ showData }) => {
  return (
    <div className="selected_patient_conatiner">
      {showData &&
        showData.length &&
        showData.map((item, i) => {
          return (
            <Fragment key={i}>
              <div className="patient_img_conatiner">
                <div className="img">
                  <img src={item?.profile_picture} alt="" />
                </div>
                <div className="patient_name">{item?.name}</div>
              </div>
              <div className="selected_patient_info">
                <div className="patient_info">
                  <img className="icon" src={BirthIcon} alt="" />
                  <div className="info">
                    <div className="info_name">Date of Birth</div>
                    <div className="info_value">
                      {FormatDate(item?.date_of_birth)}
                    </div>
                  </div>
                </div>
                <div className="patient_info">
                  <img className="icon" src={FemaleIcon} alt="" />
                  <div className="info">
                    <div className="info_name">Gender</div>
                    <div className="info_value">{item?.gender}</div>
                  </div>
                </div>
                <div className="patient_info">
                  <img className="icon" src={PhoneIcon} alt="" />
                  <div className="info">
                    <div className="info_name">Contact Info.</div>
                    <div className="info_value">{item?.phone_number}</div>
                  </div>
                </div>
                <div className="patient_info">
                  <img className="icon" src={PhoneIcon} alt="" />
                  <div className="info">
                    <div className="info_name">Emergency Contacts</div>
                    <div className="info_value">{item?.emergency_contact}</div>
                  </div>
                </div>
                <div className="patient_info">
                  <img className="icon" src={InsuranceIcon} alt="" />
                  <div className="info">
                    <div className="info_name">Insurance Provider</div>
                    <div className="info_value">{item?.insurance_type}</div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}

      <div className="btn">
        <button>Show All Information</button>
      </div>
    </div>
  );
};

export default SelectedPatientComp;
