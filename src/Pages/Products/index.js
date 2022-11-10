import React, { useEffect, useState, useMemo } from "react";
import { Table, Modal, Form, Input, InputNumber, Button } from "antd";
import productsService from "../../Services/productsService";
import generateCollumns from "./columnsProducts";
const Products = () => {
  const [formModal] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    loaddataProducts();
  }, []);

  const loaddataProducts = () => {
    productsService.getListProducts().then((res) => {
      console.log(res);
      setDataProducts(res);
    });
  };

  const editProduct = (id) => {
    productsService.get(id).then((res) => {
      console.log(res);
      formModal.setFieldsValue({
        id: res.id,
        name: res.name,
        description:res.description,
        image:res.image,
        author:res.author,
        price:res.price,
        quantity:res.quantity
      });
    });
    setVisible(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDelete = (id) => {
    productsService.delete(id).then((res) => {
      console.log(res);
      loaddataProducts();
    });
  };

  const createProduct = () => {
    formModal.resetFields();
    formModal.setFieldsValue({
      // id: dataProducts.length + 5,
      name:""
    });
    setVisible(true);
  };

  const productsColumns = useMemo(
    () =>
      generateCollumns({
        edit: editProduct,
        delteSt: handleDelete,
      }),
    [editProduct, handleDelete]
  );

  const onFinish = (values) => {
    const index = dataProducts.findIndex((item) => item.id === values.id);
    // const data = {
    //   name: values.name,
    //   age: values.age,
    // };
    console.log(values);
    if (index > -1) {
      productsService.update(values.id, values).then((res) => {
        console.log(res);
        loaddataProducts();
      });
    } else {
      productsService.add(values).then((res) => {
        console.log(res);
        loaddataProducts();
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
          onClick={createProduct}
          danger
          style={{ marginLeft: "auto" }}
        >
          Create
        </Button>
      </div>
      <div className="row">
        <Table columns={productsColumns} dataSource={dataProducts} />
      </div>
      <Modal
        title="Edit Product"
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

          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="image" label="Image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="author" label="Author" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

        </Form>
      </Modal>
    </div>
  );
};

export default Products;
