import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Text } = Typography;

const cardData = [
  { title: 'Location', color: '#f44336' },         // Red
  { title: 'Projects', color: '#ffeb3b' },         // Yellow
  { title: 'Customer', color: '#2196f3' },         // Blue
  { title: 'Vendors', color: '#00e676' },          // Green
  { title: 'Sales', color: '#00e5ff' },            // Cyan
  { title: 'Todays Purchase', color: '#d500f9' },  // Pink
  { title: 'Employee', color: '#7e57c2' }          // Purple
];

const Dashboard = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Card style={{ marginBottom: 24, background: '#eee' }}>
        <Title level={3}>REAL ESTATE</Title>
        <Text style={{ fontSize: 16 }}>Enterprise Resource Planning System</Text>
      </Card>

      <Row gutter={[16, 16]}>
        {cardData.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              style={{
                backgroundColor: item.color,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              hoverable
            >
              <div style={{ fontSize: 18 }}>{item.title}</div>
              <div>Total: 0</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
