import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import {
  displaySuccessMessage,
  displayErrorMessage,
} from "../toast/Toast";

const PeopleTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    console.log(filteredData);
  
    const getColumnSearchProps = (dataIndex, columnTitle) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            id="searchInput"
            placeholder={`Search ${columnTitle}`}
            value={selectedKeys[0] || ''} // Ensure selectedKeys[0] is not null
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => document.getElementById('searchInput').select(), 100);
        }
      },
      render: (text) => (searchedColumn === dataIndex ? <span style={{ fontWeight: 'bold' }}>{text}</span> : text),
    });
  
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys && selectedKeys.length > 0 ? selectedKeys[0] : '');
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
        setSearchedColumn('');
  setFilteredData(data);
    };
  
  
  const handleDelete = async (id)=>{
   await axios.post(`https://crimes-api.onrender.com/api/auth/delete/account/${id}`)
   displaySuccessMessage("User deleted")
    window.location.reload();
    }



  const columns = [
    {
     title: "Name",
     dataIndex: "name",
      key: 'name',
      ...getColumnSearchProps('name', 'Name'),

    },
    {
        title: "Email",
        dataIndex: "email",
      key: 'email',
      ...getColumnSearchProps('email', 'Email'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      ...getColumnSearchProps('role', 'Role'),
    },
    {
      title: 'User Id',
      dataIndex: 'idNumber',
      key: 'idNumber',
      ...getColumnSearchProps('idNumber', 'User Id'),
    },
    {
      title: 'Actions',
      key: 'id',
      render: (text, record) => (
        <Space size="middle">
          {/* <Button type="primary" >
            Edit
          </Button> */}
          <Button danger onClick={()=>handleDelete(record._id)} >
            Deactivate
          </Button>
        </Space>
      ),
    },
  ];


  const handleTableChange = (pagination, filters, sorter) => {
    if (sorter && sorter.field) {
      const { field, order } = sorter;
      const sortedData = [...filteredData].sort((a, b) => {
        const result = a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
        return order === 'descend' ? -result : result;
      });
      setFilteredData(sortedData);
    }

    if (filters && Object.keys(filters).length > 0) {
        let filteredDataCopy = [...data];
        Object.keys(filters).forEach((key) => {
          const selectedFilters = filters[key];
          if (selectedFilters && selectedFilters.length > 0) { // Add a null check
            filteredDataCopy = filteredDataCopy.filter((item) => selectedFilters.includes(item[key]));
          }
        });
        setFilteredData(filteredDataCopy);
      }
    };


  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ defaultPageSize: 10 }}

      onChange={handleTableChange}
    />
  );
};

export default PeopleTable;