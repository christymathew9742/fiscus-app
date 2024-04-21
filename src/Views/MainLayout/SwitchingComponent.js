import React from "react";
import DashBoard from "../Dash/DashBoard";
import MemberShipManage from "../component/Membership/memberShipManage.jsx";
import MemberDetails from "../component/MemberDetails/MemberDetails.jsx";

const SwitchingComponent = ({ slug }) => {
    switch ('/' + slug) {
        case "/":
          return <DashBoard/>;
          break;
        case "/member-ship":
          return <MemberShipManage/>;
          break;
        case "/member-details":
            return <MemberDetails/>;
            break;
        default:
          return <DashBoard/>;
          break;
    }
}

export default SwitchingComponent;