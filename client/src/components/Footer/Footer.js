import React from "react";
import { BottomNavigation, Button} from "@material-ui/core";
import "./Footer.css";

function Footer() {
  return (
    <BottomNavigation id="footer">
      <Button> Logout </Button>
    </BottomNavigation>
  );
}

export default Footer;
