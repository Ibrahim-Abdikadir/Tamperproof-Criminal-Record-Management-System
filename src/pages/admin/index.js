import React from "react";
import Sidebar from "../../components/Sidebar";
import { Header } from "antd/es/layout/layout";
import Userstable from "../../components/DataTable/Userstable";

const Admin = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div className="ml-[80px]">{/* <Header /> */}</div>
      </div>

      <div className="ml-3 mt-11">
        <Userstable />
      </div>
    </div>
  );
};

export default Admin;
