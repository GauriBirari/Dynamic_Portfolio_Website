import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { TfiLayoutSlider } from "react-icons/tfi";
import { RiDashboardFill } from "react-icons/ri";
import { FaMedal, FaProductHunt, FaUser } from "react-icons/fa";
import { CiLaptop, CiUser } from "react-icons/ci";
import { AiFillContacts, AiFillHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineDynamicFeed, MdAddAPhoto } from "react-icons/md";
import { GiFarmer, GiPalmTree, GiPineTree } from "react-icons/gi";
import { Layout, Menu, theme } from "antd";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logoutAccess, useSelectAccess } from "../store/stateFunctions";
import { Button } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const { Sider, Content, Header } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const superadmin = useSelectAccess("Super Admin");

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200}
        style={{ height: "100vh" }}
      >
        <div
          style={{
            height: "100%",
            overflowY: "auto",
          }}
        >
          <div className="logo text-center">
            <p className="text-white mb-0 float-end fs-4">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </p>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["adminhome"]}
            onClick={({ key }) => {
              if (key === "signout") {
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: "addprojects",
                icon: <FaProductHunt className="fs-4" />,
                label: "Add Projects",
              },
              {
                key: "addabout",
                icon: <TfiLayoutSlider className="fs-4" />,
                label: "Add About Details",
              },
              {
                key: "addskills",
                icon: <TfiLayoutSlider className="fs-4" />,
                label: "Add Skills",
              },
              {
                key: "addcertificates",
                icon: <TfiLayoutSlider className="fs-4" />,
                label: "Add Certification",
              },
              {
                key: "contactentries",
                icon: <AiFillContacts className="fs-4" />,
                label: "Contact Entries",
              },
            ]}
            className="sidebar-menu"
            style={{ color: "white" }}
          />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between  align-items-center ps-1 pe-5"
          style={{
            padding: 0,
            background: "black",
          }}
        >
          <div className="text-center">
            <h4 className="text-white ms-2">Welcome To Admin Panel</h4>
          </div>
          <div className="gap-4 align-items-center">
            <div className="d-flex gap-3 align-items-center dropdown">
              <Button
                variant="contained"
                color="error"
                onClick={() => logoutAccess("Super Admin")}
              >
                Logout
              </Button>
            </div>
          </div>
        </Header>
        <Content
          style={{
            // margin: "24px 16px",
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {" "}
          {superadmin ? <Outlet /> : <Navigate to="/super-admin" />}
          {/* <Outlet /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
