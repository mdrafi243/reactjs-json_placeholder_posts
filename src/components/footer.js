import React from "react";
import { BottomNavigation } from "material-ui/BottomNavigation";

const Footer = props => {
  return (
    <BottomNavigation selectedIndex={0}>
      <div className="footer-main">
        <span
          style={{
            fontSize: "13px",
            color: "#FFFFFF",
            margin: "auto"
          }}
        >
          {" "}
          ® All Rights Reserved by json India ©
        </span>
      </div>
    </BottomNavigation>
  );
};

export default Footer;
