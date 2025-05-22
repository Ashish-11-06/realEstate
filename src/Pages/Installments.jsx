// Installments.js
import React, { useState } from 'react';
import {
  Table, Space, Typography, Modal, Input, Form, Button, message,
} from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import AddInstallmentModal from '../Components/Modals/AddInstallmentModal';

const { Title } = Typography;

const Installments = () => {
  const [customerData] = useState([
    { key: '1', name: 'Rahul Sharma', address: 'Hadapsar, Pune', phone: '9876543210', email: 'rahul.sharma@example.com' },
    { key: '2', name: 'Priya Mehta', address: 'Andheri West, Mumbai', phone: '9823456789', email: 'priya.mehta@example.com' },
  ]);

  const [installmentData, setInstallmentData] = useState([
    { key: '1', customerKey: '1', property: 'Shivajinagar, Pune', number: 1, amount: 10000, paid: 1, total: 1 },
    { key: '2', customerKey: '2', property: 'Bandra, Mumbai', number: 2, amount: 30000, paid: 2, total: 3 },
    { key: '3', customerKey: '2', property: 'Juhu, Mumbai', number: 3, amount: 20000, paid: 1, total: 2 },
  ]);

  const [editingInstallment, setEditingInstallment] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showInstallmentModal = (record) => {
    setEditingInstallment(record);
    form.setFieldsValue(record);
    setIsEditModalVisible(true);
  };

  const handleUpdateInstallment = () => {
    form.validateFields().then((values) => {
      const updatedData = installmentData.map((item) =>
        item.key === editingInstallment.key ? { ...item, ...values } : item
      );
      setInstallmentData(updatedData);
      setIsEditModalVisible(false);
      message.success('Installment updated successfully');
    });
  };

  const handleAddInstallment = (newInstallment) => {
    const newKey = `${installmentData.length + 1}`;
    const newData = { ...newInstallment, key: newKey };
    setInstallmentData([...installmentData, newData]);
    setIsAddModalVisible(false);
    message.success('Installment added successfully');
  };

  const customerColumns = [
    { title: 'Sr No', dataIndex: 'key', key: 'key' },
    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];

  const expandedRowRender = (customerRecord) => {
    const filteredInstallments = installmentData.filter(i => i.customerKey === customerRecord.key);

    const columns = [
      { title: 'Property Address', dataIndex: 'property', key: 'property' },
      { title: 'Installment Number', dataIndex: 'number', key: 'number' },
      { title: 'Amount', dataIndex: 'amount', key: 'amount', render: val => `₹${val}` },
      { title: 'Paid', dataIndex: 'paid', key: 'paid' },
      { title: 'Total', dataIndex: 'total', key: 'total' },
      {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
          <Space>
            <EditOutlined
              style={{ cursor: 'pointer' }}
              onClick={() => showInstallmentModal(record)}
            />
            <span>Edit</span>
          </Space>
        ),
      },
    ];

    return (
      <div style={{ background: '#fafafa', padding: '12px', borderRadius: '8px' }}>
        <Title level={5}>Installment Details</Title>
        <Table
          columns={columns}
          dataSource={filteredInstallments}
          pagination={false}
          rowKey="key"
          size="small"
          bordered
        />
      </div>
    );
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={4}>Customer Payment Installment Tracker</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalVisible(true)}
        >
          Add Installment
        </Button>
      </div>

      <Table
        columns={customerColumns}
        dataSource={customerData}
        expandable={{ expandedRowRender }}
        pagination={false}
        rowKey="key"
        bordered
      />

      {/* Edit Modal */}
      <Modal
        title="Edit Installment"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsEditModalVisible(false)}>Cancel</Button>,
          <Button key="submit" type="primary" onClick={handleUpdateInstallment}>Update</Button>,
        ]}
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="property" label="Property Address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="number" label="Installment Number" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="paid" label="Paid Installments" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="total" label="Total Installments" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Modal */}
      <AddInstallmentModal
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onAdd={handleAddInstallment}
        customerData={customerData}
      />
    </div>
  );
};

export default Installments;
