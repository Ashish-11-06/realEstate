import React, { useState } from 'react';
import { Table, Input, Button, Select, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const initialData = [
  {
    key: '1',
    name: 'Seven Hills',
    location: 'Shivajinagar, Pune',
    area: '5 Acres',
    facing: 'North',
  },
  {
    key: '2',
    name: 'Mejestique Villas',
    location: 'Chandni Chowk',
    area: '7 Acres',
    facing: 'East',
  },
];

const Projects = () => {
  const [data, setData] = useState(initialData);
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState('name');

  const handleSearch = () => {
    const filtered = initialData.filter(item =>
      item[filterType].toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filtered);
  };

  const handleDelete = key => {
    setData(data.filter(item => item.key !== key));
  };

  const columns = [
    {
      title: 'Sr no',
      dataIndex: 'key',
      key: 'key',
      render: (text, _, index) => `${index + 1}.`,
    },
    {
      title: 'Proj Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Proj Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Land Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Facing',
      dataIndex: 'facing',
      key: 'facing',
    },
    {
      title: 'Options',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <EditOutlined style={{ color: '#1890ff' }} />
          <DeleteOutlined
            style={{ color: 'red' }}
            onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Title level={4}>Projects List</Title>
      <Space style={{ marginBottom: 16 }}>
        <Select value={filterType} onChange={value => setFilterType(value)}>
          <Option value="name">Proj Name</Option>
          <Option value="location">Location</Option>
        </Select>
        <Input
          placeholder="Search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={() => setData(initialData)}>Show All</Button>
      </Space>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
      />

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary" >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Projects;
