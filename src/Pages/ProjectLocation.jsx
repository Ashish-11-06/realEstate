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
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const ProjectLocation = () => {
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Seaside Residency',
      isActive: true,
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      createdBy: 'Admin',
    },
    {
      key: '2',
      name: 'Green Hills Apartment',
      isActive: false,
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411001',
      createdBy: 'User1',
    },
    {
      key: '3',
      name: 'Lakeview Towers',
      isActive: true,
      city: 'Nashik',
      state: 'Maharashtra',
      pincode: '422001',
      createdBy: 'Admin',
    },
  ]);

  const handleSearch = () => {
    if (!searchValue.trim()) {
      // If search empty, reset to original data (or you can store original data separately)
      setData(originalData);
      return;
    }
    const filtered = originalData.filter((item) => {
      const searchLower = searchValue.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchLower) ||
        item.city.toLowerCase().includes(searchLower) ||
        item.state.toLowerCase().includes(searchLower) ||
        item.pincode.toLowerCase().includes(searchLower) ||
        item.createdBy.toLowerCase().includes(searchLower)
      );
    });
    setData(filtered);
  };

  // We'll keep original data in a ref or a variable to reset search properly
  const originalData = [
    {
      key: '1',
      name: 'Seaside Residency',
      isActive: true,
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      createdBy: 'Admin',
    },
    {
      key: '2',
      name: 'Green Hills Apartment',
      isActive: false,
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411001',
      createdBy: 'User1',
    },
    {
      key: '3',
      name: 'Lakeview Towers',
      isActive: true,
      city: 'Nashik',
      state: 'Maharashtra',
      pincode: '422001',
      createdBy: 'Admin',
    },
  ];

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
    const filteredData = data.filter((item) => item.key !== key);
    setData(filteredData);
    message.success('Deleted successfully');
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      if (editingItem) {
        // Update
        const updatedData = data.map((item) =>
          item.key === editingItem.key ? { ...editingItem, ...values } : item
        );
        setData(updatedData);
        message.success('Updated successfully');
      } else {
        // Add new
        const newKey = (Math.max(...data.map((d) => parseInt(d.key))) + 1).toString();
        const newItem = {
          ...values,
          key: newKey,
        };
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
      title: 'Sr no.',
      dataIndex: 'key',
      key: 'key',
      sorter: (a, b) => parseInt(a.key) - parseInt(b.key),
    },
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: 'pincode',
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (active) => (
        <Tag color={active ? 'green' : 'red'}>
          {active ? 'Active' : 'Inactive'}
        </Tag>
      ),
    },
    {
      title: 'Options',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
          >
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
       <Title level={4}>Customer List</Title>

      {/* Add Project button aligned right, Search input aligned left */}
      <Space
        style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}
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
          <Button type="default" onClick={handleShowAll}>
            Show All
          </Button>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showModal()}
            style={{
              fontWeight: 'bold',
              borderRadius: '12px',
              width: 140,
              height: 40,
            }}
          >
            Add Project
          </Button>
        </Space>
      </Space>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        style={{ marginBottom: 32 }}
      />

      {/* Modal Form */}
      <Modal
        title={editingItem ? 'Edit Project Location' : 'Add Project Location'}
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
            label="Project Name"
            name="name"
            rules={[{ required: true, message: 'Please enter project name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please enter city' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: 'Please enter state' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[{ required: true, message: 'Please enter pincode' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Created By"
            name="createdBy"
            rules={[{ required: true, message: 'Please enter creator name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Is Active" name="isActive" rules={[{required: true, message:'Please select status'}]}>
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

export default ProjectLocation;
