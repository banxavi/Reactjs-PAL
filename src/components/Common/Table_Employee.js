import { Table, Tag, Space } from 'antd';
import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';
import ModalEdit_Benefit from '../Benefits/ModalEdit_Benefit';
import ModalSearch from './ModalSearch';
import { SERVER } from "../API/api_url";

export default function Table_Employee(props) {
  const [posts, setPosts] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const position_color = (color) =>{
    let b = color.length > 5 ? 'geekblue' : 'green';
          if (color === 'PM') {
            b = 'volcano';
          }
    return b;
  }
  const columns_employee = [
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

  const columns_benefit = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      render: text => <a>{text.toUpperCase()}</a>,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      filters: [
        {
          text: 'DIRECTOR',
          value: 'DIRECTOR',
        },
        {
          text: 'SME',
          value: 'SME',
        },
        {
          text: 'Project Manager',
          value: 'PM',
        },
        {
          text: 'ENGINEER',
          value: 'ENGINEER',
        },
      ],
      onFilter: (value, record) => record.position.startsWith(value),
      width: '15%',
      render: position =>  (
        <Tag color={position_color(position)} key={position}>
          {position.toUpperCase()}
        </Tag>
      )
    },
     
    {
      title: 'Experiences Year',
      dataIndex: 'experiences',
      key: 'experiences',
    },
    {
      title: 'Insuarances/Month',
      dataIndex: 'insuarance',
      key: 'insuarance',
    },
    {
      title: 'Last salary',
      dataIndex: 'last_salary',
      key: 'last_salary',
      sorter: (a, b) => a.last_salary - b.last_salary,
    },
    {
      title: 'PA Toeic',
      dataIndex: 'PA_Toeic',
      key: 'PA_Toeic',
    },
    {
      title: 'PA Perform',
      dataIndex: 'PA_Perform',
      key: 'PA_Perform',
    },
    {
      title: 'Current salary',
      dataIndex: 'current_salary',
      key: 'current_salary',
      sorter: (a, b) => a.current_salary - b.current_salary,

    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <ModalEdit_Benefit postId={record.id}  superReload={superReload}/>
        </Space>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const rel = props

  const axiosGet = async () => {
    setLoading(true)
    axios
      .get(`${SERVER}/${props.url_api}`)
      .then((res) => {
        setPosts(res.data);

      })
      .catch((error) => console.log(error)).finally(() =>{
        setLoading(false)
      })};
  useEffect(() => {
    axiosGet();
}, [isReload, rel]);

var url_search = props.url_api==='employee'?`${SERVER}/search`:`${SERVER}/search/benefit`
const onSearch = async () => {
  if (search){
    axios
    .get(`${url_search}/${search}`)
    .then(function (respone) {
      console.log(respone);
      setPosts(respone.data);
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

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then( responses => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//       console.log(response)
//     }
//   })
//   .catch( error => {
//     console.error(`Failed to fetch: ${error}`)
//   });
// async function fetchProducts() {
//   try {
//     // after this line, our function will wait for the `fetch()` call to be settled
//     // the `fetch()` call will either return a Response or throw an error
//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // after this line, our function will wait for the `response.json()` call to be settled
//     // the `response.json()` call will either return the JSON object or throw an error
//     const json = await response.json();
//     console.log(json[0].name);
//   }
//   catch(error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts();
  return (
    <div>
    <div className="searchemployee">
      <ModalSearch info_search={pull_data} onSearch={onSearch}/>
      </div>
      <Table loading={loading} onChange={onChange} columns={props.url_api==='employee'?columns_employee:columns_benefit} dataSource={posts}
        pagination={{defaultPageSize:7}}
      />
      </div>
  );}