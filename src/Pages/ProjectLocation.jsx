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
  CheckOutlined,
} from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const ProjectLocation = () => {
  const [searchValue, setSearchValue] = useState('');

  const columns = [
    {
      title: 'Sr no.',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'IsActive',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (active) => (active ? <CheckOutlined /> : null),
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
      name: 'Mumbai',
      isActive: true,
    },
    {
      key: '2',
      name: 'Mumbai',
      isActive: true,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={5}>Project Location</Title>

      {/* Filter and Search Section */}
      <Space style={{ marginBottom: 16 }}>
        <Select defaultValue="Name" style={{ width: 120 }}>
          <Option value="name">Name</Option>
        </Select>

        <Input
          placeholder="Search by name"
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

export default ProjectLocation;
