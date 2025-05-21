import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ApartmentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', position: 'fixed', left: 0, top: 70, width: collapsed ? 70 : 200, zIndex: 10 }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
        inlineCollapsed={collapsed}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Dashboard',
            onClick: () => navigate('/'),
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'Installments',
            onClick: () => {},
          },
          {
            key: '3',
            icon: <ApartmentOutlined />,
            label: 'Project Location',
            onClick: () => {},
          },
          {
            key: '4',
            icon: <HomeOutlined />,
            label: 'Projects',
            onClick: () => {},
          },
          {
            key: '5',
            icon: <HomeOutlined />,
            label: 'Customers',
            onClick: () => {},
          },
          {
            key: '6',
            icon: <HomeOutlined />,
            label: 'Vendors',
            onClick: () => {},
          },
          {
            key: '7',
            icon: <HomeOutlined />,
            label: 'Sales',
            onClick: () => {},
          },
          {
            key: '8',
            icon: <HomeOutlined />,
            label: 'Employee',
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
