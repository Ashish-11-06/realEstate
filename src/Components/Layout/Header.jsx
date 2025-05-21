// src/components/Header.jsx
import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = ({ isMobile, drawerVisible, toggleDrawer }) => {
  return (
    <div
      style={{
        width: '100vw',
        color: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2000,
        background: '#fff',
        // padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        boxShadow: '0 2px 8px #f0f1f2'
      }}
    >
      <h2 style={{ margin: 50 }}>Real Estate</h2>
      {/* Dummy user info */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: 12 }}>Hello, User!</span>
        {/* <img src="https://i.pravatar.cc/32" alt="avatar" style={{ borderRadius: '50%' }} /> */}
      </div>
    </div>
  );
};

export default AppHeader;
