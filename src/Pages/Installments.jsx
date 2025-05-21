import React from 'react';
import { Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const customerColumns = [
  {
    title: 'Sr no',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Cust Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Options',
    key: 'actions',
    render: (_, record) => (
      <Space>
        <EditOutlined style={{ cursor: 'pointer' }} />
        <span>Edit</span>
        <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
        <span>Delete</span>
      </Space>
    ),
  },
];

const customerData = [
  {
    key: '1',
    name: 'jon doe',
    address: 'pune',
    phone: '789xxxx',
    email: 'abc@gmail.com',
  },
  {
    key: '2',
    name: 'John doe',
    address: 'Chandni chowk',
    phone: '789xxxx',
    email: 'pqr@gmail.com',
  },
];

const installmentColumns = [
  {
    title: 'Property addr',
    dataIndex: 'property',
    key: 'property',
  },
  {
    title: 'Installation num',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'install amt',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'paid installment',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'Total install',
    dataIndex: 'total',
    key: 'total',
  },
];

const installmentData = [
  {
    key: '1',
    property: 'shivajinagar pune',
    number: 1,
    amount: '10,000',
    paid: 1,
    total: 1,
  },
  {
    key: '2',
    property: 'bandra mumbai',
    number: 2,
    amount: '30,000',
    paid: 2,
    total: 3,
  },
];

const Installments = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={4}>Payment installation tracking</Title>

      <Table
        columns={customerColumns}
        dataSource={customerData}
        pagination={false}
        style={{ marginBottom: 32 }}
      />

      <Table
        columns={installmentColumns}
        dataSource={installmentData}
        pagination={false}
      />
    </div>
  );
};

export default Installments;
