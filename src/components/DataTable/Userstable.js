import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Select } from "antd";
import qs from "qs";
import UserModel from "../Model/userModel";
import apiClient from "../../api/apiClient";
import { useDispatch } from "react-redux";
import PeopleTable from "./peopleTable";

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
function Userstable() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userdata, setData] = useState();

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const getReports = async () => {
    const token = localStorage.getItem("userToken");
    setLoading(true);
    const res = await apiClient.get(
      `https://crimes-api.onrender.com/api/users?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(res.data);
    setLoading(false);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: res.length,
      },
    });
  };
  useEffect(() => {
    getReports();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
     

  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-10">
          <button
            onClick={() => {
              setIsOpen(true);

              console.log(isOpen);
            }}
            className="w-20  mt-2 py-2 bg-slate-600 rounded-md hover:bg-indigo-500 relative text-white"
          >
            Add User
          </button>
          <h1 className="text-xl font-semibold">Users</h1>
        </div>
        <div className="mt-6">


          <PeopleTable data={userdata?.data}/>
        </div>
      </main>
   {
      <UserModel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={() => setIsOpen(false)}
      />
   }
    </div>
  );
}

export default Userstable;
