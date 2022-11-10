import React, { useEffect, useState, useMemo } from "react";
import { Table, Modal, Form, Input, InputNumber, Button } from "antd";
import studentService from "../../Services/studentsService";
import generateCollumns from "./columnsMyClass";
// import { useDispatch, useSelector } from "react-redux";
// import { studentsState$ } from "../../redux/selectors";
import * as actions from "../../redux/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";

import { selectLoading, selectStudents } from "../../redux/selectors";
const MyClass = (props) => {
  const [formModal] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const { getAllStudents, asynCreateStudent } = props;
  const { loading, listStudent } = props;

  useEffect(() => {
    getAllStudents();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const editStudent = (id) => {
    studentService.get(id).then((res) => {
      console.log(res);
      formModal.setFieldsValue({
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
    });
  };

  const createPeople = () => {
    formModal.resetFields();
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
  console.log(props);
  const onFinish = async (values) => {
    console.log(values);
    const data = await asynCreateStudent(values);
    if (data) {
      props.getAllStudents();
    }
    console.log(data);
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
        <Table
          columns={studentsColumns}
          dataSource={listStudent}
          loading={loading}
        />
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

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  listStudent: selectStudents,
});

const mapDispatchToProps = (dispatch) => ({
  getAllStudents: (payload) => dispatch(actions.getAllStudents(payload)),
  asynCreateStudent: (payload) => actions.asyncCreateStudent(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MyClass);
