// AddInstallmentModal.js
import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';

const AddInstallmentModal = ({
  visible,
  onCancel,
  onAdd,
  customerData,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onAdd(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Add Installment"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>Cancel</Button>,
        <Button key="submit" type="primary" onClick={handleOk}>Add</Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          name="customerKey"
          label="Select Customer"
          rules={[{ required: true, message: 'Please select a customer' }]}
        >
          <Select placeholder="Select a customer">
            {customerData.map(customer => (
              <Select.Option key={customer.key} value={customer.key}>
                {customer.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
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
  );
};

export default AddInstallmentModal;
