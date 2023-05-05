import * as React from "react";
type props = {
  flist: any;
  site: any;
  icon: any;
  copy: any;
};
// props call
const Footer = (props: any) => {
  console.log(props?.copy, "props");
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

  const listone = props?.flist?.listOne?.map((item: any) => {
    // console.log(item,"item")
    return (
      <ul>
        <li className="mb-4" style={{ paddingLeft: "4rem", fontSize: "15px" }}>
          <a href={item.link} className="uppercase">
            {item?.label}
          </a>
        </li>
      </ul>
    );
  });

  const listtwo = props?.flist?.listTwo?.map((item: any) => {
    // console.log(item,"item")
    return (
      <ul>
        <li className="mb-4" style={{ paddingLeft: "7rem" }}>
          <a href={item.link} className="uppercase">
            {item?.label}
          </a>
        </li>
      </ul>
    );
  });

  const privacy = props?.flist?.privacyPolicyListing?.map((item: any) => {
    // console.log(item,"item123")
    return (
      <ul>
        <li className="mb-1" style={{ paddingLeft: "7rem", color: "#756757" }}>
          <a href={item.link} className="uppercase">
            {item?.label}
          </a>
        </li>
      </ul>
    );
  });

  const icons = props?.icon?.map?.((item: any) => {
    // console.log(item,"any")
    return (
      <>
        <a href={item?.socialLink?.link}>
          <ul>
            <li>
              <img
                src={item?.socialIcon?.url}
                style={{ height: "35px", paddingRight: "35px" }}
              />
            </li>
          </ul>
        </a>
      </>
    );
  });
  // console.log(props?.site?.c_socialLinkText,"rops?.c_socialLinkText")
  return (
    <>
      <div className="flex pt-5">
        <div>{listone}</div>
        <div>{listtwo}</div>
        <div>{privacy}</div>
        <div style={{ paddingLeft: "5rem" }}>
          <h3
            className="uppercase"
            style={{ paddingBottom: "15px", color: "#756757" }}
          >
            {props?.site?.c_socialLinkText}
          </h3>
          <div className="flex ">{icons}</div>
        </div>
      </div>
      <div>
        <img
          src={props?.copy?.imageCopyright?.url}
          style={{ width: "15%", padding: "10px 0px 15px 50px" }}
        />
      </div>
      <div className="flex" style={{ gap: "65rem" }}>
        <p style={{ color: "#756757", padding: "5px 0px 0px 50px" }}>
          {props?.copy?.textCopyright}
        </p>
        <img
          src={props?.copy?.suntoryImage.url}
          style={{ padding: "0px 10px 30px 0px" }}
        />
      </div>
    </>
  );
};

export default Footer;
