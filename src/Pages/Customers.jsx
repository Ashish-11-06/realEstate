import React, { useState } from 'react';
import {
  Table,
  Input,
  Button,
  Space,
  Typography,
  Modal,
  Form,
  Tag,
  Popconfirm,
  message,
  Select,
} from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Customers = () => {
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Ashish Bhosale',
      email: 'ashish@example.com',
      phone: '1234567890',
      status: true,
    },
    {
      key: '2',
      name: 'Priya Patil',
      email: 'priya@example.com',
      phone: '9876543210',
      status: false,
    },
  ]);

  const originalData = [...data];

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setData(originalData);
      return;
    }
    const searchLower = searchValue.toLowerCase();
    const filtered = originalData.filter((item) =>
      Object.values(item).some(
        (value) =>
          String(value).toLowerCase().includes(searchLower)
      )
    );
    setData(filtered);
  };

  const handleShowAll = () => {
    setSearchValue('');
    setData(originalData);
  };

  const showModal = (record = null) => {
    setEditingItem(record);
    setIsModalVisible(true);
    if (record) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
  };

  const handleDelete = (key) => {
    const updated = data.filter((item) => item.key !== key);
    setData(updated);
    message.success('Deleted successfully');
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      if (editingItem) {
        const updatedData = data.map((item) =>
          item.key === editingItem.key ? { ...item, ...values } : item
        );
        setData(updatedData);
        message.success('Updated successfully');
      } else {
        const newKey = (Math.max(...data.map((d) => parseInt(d.key))) + 1).toString();
        const newItem = { ...values, key: newKey };
        setData([...data, newItem]);
        message.success('Added successfully');
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingItem(null);
    });
  };

  const columns = [
    {
      title: 'Sr No.',
      dataIndex: 'key',
      key: 'key',
      sorter: (a, b) => parseInt(a.key) - parseInt(b.key),
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status ? 'green' : 'red'}>
          {status ? 'Active' : 'Inactive'}
        </Tag>
      ),
    },
    {
      title: 'Options',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="link" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title style={{ textAlign: 'left' }}  level={4}>Customer List</Title>

      {/* Search & Add Button */}
      <Space
        style={{
          marginBottom: 16,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Input
          placeholder="Search by any field"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onPressEnter={handleSearch}
          style={{ width: 300 }}
          allowClear
        />
        <Space>
          <Button onClick={handleShowAll}>Show All</Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showModal()}
            style={{
              fontWeight: 'bold',
              borderRadius: '12px',
              width: 150,
              height: 40,
            }}
          >
            Add Customer
          </Button>
        </Space>
      </Space>

      {/* Customer Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        style={{ marginBottom: 32 }}
      />

      {/* Modal for Add/Edit */}
      <Modal
        title={editingItem ? 'Edit Customer' : 'Add Customer'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        okText="Save"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Customer Name"
            name="name"
            rules={[{ required: true, message: 'Please enter customer name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select>
              <Select.Option value={true}>Active</Select.Option>
              <Select.Option value={false}>Inactive</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Customers;
