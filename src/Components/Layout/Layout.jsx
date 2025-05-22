/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import DrawerMenu from "./DrawerMenu";
import HeaderComponent from "./Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const { Content } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const sidebarWidth = collapsed ? 80 : 218; // Adjust sidebar width based on collapsed state


  return (
    <Layout style={{ minHeight: "100vh"}}>
      {/* Sidebar for larger screens */}
      {!isMobile && (
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
        />
      )}

      {/* Drawer for smaller screens */}
      {isMobile && <DrawerMenu drawerVisible={drawerVisible} toggleDrawer={toggleDrawer} />}

      {/* Layout for Header and Content */}
      <Layout
        style={{
          marginLeft: !isMobile ? sidebarWidth : 0,
        }}
      >
        <HeaderComponent isMobile={isMobile} drawerVisible={drawerVisible} toggleDrawer={toggleDrawer} />

        <Content style={{ padding: 16,  marginTop: 70 }}>
          <Outlet />
        </Content>
      </Layout>

    </Layout>
  );
};

export default LayoutComponent;
// No changes needed; layout already provides common sidebar and header for all pages.
