import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  ApartmentOutlined,
  ProjectOutlined,
  TeamOutlined,
  ShopOutlined,
  DollarOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 70,
        width: collapsed ? 70 : 220,
        zIndex: 10,
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{
          height: '100%',
          textAlign: 'left',
        }}
        inlineCollapsed={collapsed}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Dashboard',
            onClick: () => navigate('/dashboard'),
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'Installments',
            onClick: () => navigate('/installments'),
          },
          // {
          //   key: '3',
          //   icon: <ApartmentOutlined />,
          //   label: 'Project Location',
          //   onClick: () => navigate('/project-location'),
          // },
          {
            key: '4',
            icon: <ProjectOutlined />,
            label: 'Projects',
            onClick: () => navigate('/projects'),
          },
          {
            key: '5',
            icon: <TeamOutlined />,
            label: 'Customers',
            onClick: () => navigate('/customers'),
          },
          {
            key: '6',
            icon: <ShopOutlined />,
            label: 'Vendors',
            onClick: () => navigate('/vendors'),
          },
          {
            key: '7',
            icon: <DollarOutlined />,
            label: 'Sales',
            onClick: () => navigate('/sales'),
          },
          {
            key: '8',
            icon: <SolutionOutlined />,
            label: 'Employee',
            onClick: () => navigate('/employee'),
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
