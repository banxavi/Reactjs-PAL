import React from "react";
import { CFooter, CLink } from '@coreui/react'

const Footer = () => {
  return (
    <CFooter style={{ position:'absolute',
      left:0,
      bottom:0,
      right:0}}>
    <div>
      <CLink href="https://coreui.io">BanXavi</CLink>
      <span>&copy; 2022 creativeLabs.</span>
    </div>
    <div>
      <span>Powered by</span>
      <CLink href="https://coreui.io">BanXavi</CLink>
    </div>
  </CFooter>
  );
};
export default Footer;