import * as React from "react";
import { stagingBaseurl } from "../../../sites-global/global";
import HeaderMarker from "../../images/HeaderMarker.svg";
import headerMap from "../../images/HeaderMap.svg";

type props = {
  _site: any;
  head: any;
  navbar: any;
};

const Header = (props: any) => {
  // console.log(props, "props");
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  // console.log(props?.navbar, "props123");

  const nav = props?.navbar?.map((n: any) => {
    // console.log(n, "n");
    return (
      <ul>
        <li>
          <a href={n?.link} style={{ paddingRight: "60px", fontSize: "16px" }}>
            {n?.label}
          </a>
        </li>
      </ul>
    );
  });
  return (
    <>
      <div className="flex justify-between" style={{ padding: "0.7rem 1rem" }}>
        <img
          src={props?.head?.logo?.url}
          style={{
            height: "39px",
            width: "217px",
            marginTop: "30px",
            marginLeft: "50px",
          }}
        />
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "70px" }}
        >
          {nav}
        </div>
      </div>
    </>
  );
};

export default Header;
