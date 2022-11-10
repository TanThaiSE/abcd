import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Table,
  Popconfirm,
  Space,
  Modal,
  Form,
  Input,
  InputNumber,
  Button,
} from "antd";

const data = [
  {
    id: 1,
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: 2,
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: 3,
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];
const Students = () => {
  const [formModal] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [dataArr, setDataArr] = useState(data);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <NavLink to={`/products/${text}`}>{text}</NavLink>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <button onClick={() => openModal(record.id)}>Edit</button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <button>Delete</button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const openModal = (id) => {
    const dataModal = dataArr.find((item) => item.id === id);
    formModal.setFieldsValue({
      id: dataModal.id,
      age: dataModal.age,
      name: dataModal.name,
      address: dataModal.address,
    });
    setDataModal(dataModal);
    setVisible(true);
  };

  const handleDelete = (id) => {
    const dataSource = [...dataArr];
    setDataArr(dataSource.filter((item) => item.id !== id));
  };

  const createPeople = () => {
    formModal.resetFields();
    formModal.setFieldsValue({
      id: dataArr.length + 1,
    });
    setVisible(true);
  };

  const onFinish = (values) => {
    const index = dataArr.findIndex((item) => item.id === values.id);
    if (index > -1) {
      const peopleEdit = dataArr
        .filter((x) => x.id === dataModal.id)
        .map((item) => (item = values));
      const newArr = dataArr.map(
        (obj) => peopleEdit.find((o) => o.id === obj.id) || obj
      );
      setDataArr(newArr);
    } else {
      setDataArr([...dataArr, values]);
    }

    handleCancel();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      <div className="row">
        <Button
          type="primary"
          onClick={createPeople}
          danger
          style={{ marginLeft: "auto" }}
        >
          Create
        </Button>
      </div>
      <div className="row">
        <Table columns={columns} dataSource={dataArr} />
      </div>
      <Modal
        title="Edit Student"
        visible={visible}
        onCancel={handleCancel}
        footer={
          <Button type="primary" htmlType="submit" form="formModal">
            Save
          </Button>
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          form={formModal}
          name="formModal"
          onFinish={onFinish}
        >
          <Form.Item name="id" label="id" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Students;
