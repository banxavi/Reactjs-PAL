import { Table, Tag, Space } from 'antd';
import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';
import ModalSearch from './ModalSearch';

export default function Table_Employee(props) {
  const [posts, setPosts] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const rel = props

  const position_color = (color) =>{
    let b = color.length > 5 ? 'geekblue' : 'green';
          if (color === 'PM') {
            b = 'volcano';
          }
    return b;
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text.toUpperCase()}</a>,
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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Position',
      key: 'position',
      dataIndex: 'position',
      render: position =>  (
              <Tag color={position_color(position)} key={position}>
                {position.toUpperCase()}
              </Tag>
            )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <ModalEdit postId={record.id}  superReload={superReload}/>
          <ModalDelete postId={record.id} postEmail={record.email}  superReload={superReload}/>
        </Space>
      ),
    },
  ];

  const axiosGet = async () => {
    setLoading(true)
    axios
      .get("http://127.0.0.1:5000/emp")
      .then((res) => {
        const employee = res.data;
        setPosts(employee);

      })
      .catch((error) => console.log(error)).finally(() =>{
        setLoading(false)
      })};
  useEffect(() => {
    axiosGet();
}, [isReload, rel]);

const onSearch = async () => {
  if (search){
    axios
    .get(`http://127.0.0.1:5000/search/${search} `)
    .then(function (respone) {
      console.log(respone);
      const info_search = respone.data;
      setPosts(info_search);
    })
    .catch((error) => console.log(error));
}
else{
  axiosGet()
};

  }
  const pull_data = (data) => {
    setSearch(data)     // LOGS DATA FROM CHILD
  }

  const superReload = () => {
      setIsReload(!isReload)
  }

  return (
    <div>
    <div className="searchemployee">
      <ModalSearch info_search={pull_data} onSearch={onSearch}/>
      </div>
      <Table loading={loading} columns={columns} dataSource={posts}
        pagination={{defaultPageSize:7}}
      />
      </div>
  );}