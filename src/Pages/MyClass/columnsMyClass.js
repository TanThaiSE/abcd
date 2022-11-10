import React from "react";
import { Popconfirm, Space } from "antd";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ edit, delteSt }) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Phone",
      dataIndex: "numberPhone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <button onClick={() => edit(record.id)}>Edit</button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => delteSt(record.id)}
          >
            <button>Delete</button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
};
