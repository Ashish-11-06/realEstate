import React, { useState } from 'react';
import {
  Table,
  Input,
  Select,
  Button,
  Space,
  Typography,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const Employee = () => {
  const [searchValue, setSearchValue] = useState('');

  const columns = [
    {
      title: 'Sr no',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Customer Name',
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
      render: () => (
        <Space>
          <EditOutlined style={{ cursor: 'pointer' }} />
          <span>Edit</span>
          <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
          <span>Delete</span>
        </Space>
      ),
    },
  ];

  const data = [
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

  return (
    <div style={{ padding: 24 }}>
      <Title level={5}>Employee</Title>

      {/* Filter & Search */}
      <Space style={{ marginBottom: 16 }}>
        <Select defaultValue="Cust. Name" style={{ width: 140 }}>
          <Option value="name">Cust. Name</Option>
        </Select>

        <Input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Button type="primary">Search</Button>
        <Button>Show All</Button>
      </Space>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ marginBottom: 32 }}
      />

      {/* Add Button */}
      <div style={{ textAlign: 'center' }}>
        <Button
          type="primary"
          style={{
            // backgroundColor: '#e88df1',
            // borderColor: '#e88df1',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '12px',
            width: 120,
            height: 40,
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Employee;
