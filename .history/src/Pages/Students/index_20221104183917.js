import React, { useEffect, useState, useMemo } from "react";
import { Table, Modal, Form, Input, InputNumber, Button } from "antd";
import studentService from "../../Services/studentsService";
import generateCollumns from "./columnsStudents";
const Students = () => {
  const [formModal] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [dataStudents, setDataStudents] = useState([]);

  useEffect(() => {
    loadDataStudents();
  }, []);

  const loadDataStudents = () => {
    studentService.getListStudents().then((res) => {
      console.log(res);
      setDataStudents(res);
    });
  };

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  //   {
  //     title: "Phone",
  //     dataIndex: "numberPhone",
  //     key: "phone",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //     key: "email",
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (text, record) => (
  //       <Space size="middle">
  //         <button onClick={() => editStudent(record.id)}>Edit</button>
  //         <Popconfirm
  //           title="Sure to delete?"
  //           onConfirm={() => handleDelete(record.id)}
  //         >
  //           <button>Delete</button>
  //         </Popconfirm>
  //       </Space>
  //     ),
  //   },
  // ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const editStudent = (id) => {
    studentService.get(id).then((res) => {
      console.log(res);
      formModal.setFieldsValue({
        id: res.id,
        age: res.age,
        name: res.name,
        numberPhone: res.numberPhone,
        email: res.email,
      });
    });
    setVisible(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDelete = (id) => {
    studentService.delete(id).then((res) => {
      console.log(res);
      loadDataStudents();
    });
  };

  const createPeople = () => {
    formModal.resetFields();
    formModal.setFieldsValue({
      id: dataStudents.length + 5,
    });
    setVisible(true);
  };

  const studentsColumns = useMemo(
    () =>
      generateCollumns({
        edit: editStudent,
        delteSt: handleDelete,
      }),
    [editStudent, handleDelete]
  );

  const onFinish = (values) => {
    const index = dataStudents.findIndex((item) => item.id === values.id);
    // const data = {
    //   name: values.name,
    //   age: values.age,
    // };
    console.log(values);
    if (index > -1) {
      studentService.update(values.id, values).then((res) => {
        console.log(res);
        loadDataStudents();
      });
    } else {
      studentService.add(values).then((res) => {
        console.log(res);
        loadDataStudents();
      });
    }
    handleCancel();
  };

  const handleCancel = () => {
    formModal.resetFields();
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
        <Table columns={studentsColumns} dataSource={dataStudents} />
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
          <Form.Item name="id" label="Id" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="numberPhone"
            label="Phone"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Students;
