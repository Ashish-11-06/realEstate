import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { 
  EnvironmentOutlined,       // Location
  ProjectOutlined,          // Projects
  TeamOutlined,             // Customer
  ShopOutlined,             // Vendors
  RiseOutlined,             // Sales
  ShoppingCartOutlined,     // Purchase
  UserOutlined              // Employee
} from '@ant-design/icons';

const { Title, Text } = Typography;

const cardData = [
  { 
    title: 'Locations', 
    icon: <EnvironmentOutlined />,
    count: 2
  },
  { 
    title: 'Projects', 
    icon: <ProjectOutlined />,
    count: 5
  },
  { 
    title: 'Customers', 
    icon: <TeamOutlined />,
    count: 10
  },
  { 
    title: 'Vendors', 
    icon: <ShopOutlined />,
    count: 3
  },
  { 
    title: 'Sales', 
    icon: <RiseOutlined />,
    count: 15
  },
  { 
    title: "Today's Purchases", 
    icon: <ShoppingCartOutlined />,
    count: 8
  },
  { 
    title: 'Employees', 
    icon: <UserOutlined />,
    count: 20
  }
];

const Dashboard = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Card 
        style={{ 
          marginBottom: 24, 
          background: '#fff',
          border: '1px solid #f0f0f0'
        }}
      >
        <Title level={3} style={{ marginBottom: 0 }}>
          REAL ESTATE ERP
        </Title>
        <Text style={{ fontSize: 16, color: '#666' }}>
          Enterprise Resource Planning System
        </Text>
      </Card>

      <Row gutter={[16, 16]}>
        {cardData.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
            <Card
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '1px solid #f0f0f0',
                borderRadius: 8,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
              hoverable
              bodyStyle={{ padding: '16px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 12
              }}>
                <div style={{ 
                  fontSize: 20,
                  color: '#1a4b8c'  // Primary color for icons only
                }}>
                  {item.icon}
                </div>
                <div style={{ 
                  fontSize: 16, 
                  fontWeight: 600,
                  color: '#000'
                }}>
                  {item.title}
                </div>
              </div>
              <div style={{ 
                fontSize: 24, 
                fontWeight: 700,
                color: '#000',
                textAlign: 'right'
              }}>
                {item.count || 0}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;