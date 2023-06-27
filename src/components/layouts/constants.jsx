import { Button } from "antd";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  DashboardOutlined,
  ProfileOutlined,
  TableOutlined,
  FormOutlined,
} from "@ant-design/icons";

import "./Header/header.css";

export const MENU_ITEM = [
  {
    label: (
      <ScrollLink to="heroback" smooth={true} duration={500} offset={-65}>
        Home
      </ScrollLink>
    ),
    key: "home",
  },
  {
    label: (
      <ScrollLink to="services" smooth={true} duration={500} offset={-65}>
        Skill
      </ScrollLink>
    ),
    key: "services",
  },
  {
    label: (
      <ScrollLink to="menu" smooth={true} duration={500} offset={-65}>
        Project
      </ScrollLink>
    ),
    key: "menu",
  },
];

export const SIDER_ITEM = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <ProfileOutlined />,
    label: <Link to="/menu-page">Menus</Link>,
  },
  {
    key: "3",
    icon: <FormOutlined />,
    label: <Link to="/order-page">Orders</Link>,
  },
  {
    key: "4",
    icon: <FormOutlined />,
    label: <Link to="/reservations-page">Reservations</Link>,
  },
  {
    key: "5",
    icon: <TableOutlined />,
    label: <Link to="/report-page">Report</Link>,
  },

];
