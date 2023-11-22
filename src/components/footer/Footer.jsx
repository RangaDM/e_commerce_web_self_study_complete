import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
    Add: false,
  });
  return (
    <footer
      className=" fixed bottom-0 left-0 z-[100] w-full p-1 bg-my-background flex items-center justify-between md:gap-5"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      }}
    >
      <div className=" w-full flex justify-around">
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={HomeOutlinedIcon}
          iconText="Home"
        />
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={AppsOutlinedIcon}
          iconText="Category"
        />
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={AccountCircleOutlinedIcon}
          iconText="Profile"
        />
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={AddTaskIcon}
          iconText="User"
        />
      </div>
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText, clickFun }) => {
  const clickHandle = () => {
    const obj = {
      Home: true,
      Category: false,
      Profile: false,
      Add: false,
    };
    if (iconText === "Category") {
      obj.Category = true;
      obj.Home = false;
      obj.Profile = false;
      obj.Add = false;
    } else if (iconText === "Profile") {
      obj.Profile = true;
      obj.Home = false;
      obj.Category = false;
      obj.Add = false;
    } else if (iconText === "User") {
      obj.Profile = false;
      obj.Home = false;
      obj.Category = false;
      obj.Add = true;
    }

    clickFun.setWhoIsClick(obj);
  };

  return (
    <Link to={iconText === "Home" ? "/" : `/${String(iconText).toLowerCase()}`}>
      <IconButton
        sx={{
          padding: "4px",
          marginLeft: "8px",
          paddingTop: "0",
          borderRadius: "5px",
          color: "red",
        }}
        onClick={clickHandle}
      >
        <div
          style={{
            color: clickFun.whoIsClick[iconText] && "#c82196",
          }}
          className=" text-gray-700 hover:text-[#c82196] transition-all duration-300"
        >
          <Icon />
          <p className=" text-xs font-semibold">{iconText}</p>
        </div>
      </IconButton>
    </Link>
  );
};
