import Layout from "../../api/layout/layout";
import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { FcOpenedFolder } from "react-icons/fc";
import { ImFileText2 } from "react-icons/im";
import apiClient from "../../api/apiClient";
import { Link,useLocation} from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EvidenceInfo() {
  const [data, setData] = useState();
  const token = localStorage.getItem("userToken");
  const location = useLocation()
  const id = location.pathname.split("/")[2]

  let [categories] = useState({
    EvidenceRecords: [
      {
        id: 1,
        icon: <FcOpenedFolder size={90} />,
      },
    ]
  });

  const getData = async () => {
    const res = await apiClient.get(`/forensics/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data?.photos[0]);

  return (
    <Layout>
      <div className="w-full  max-w-md px-2 py-16 sm:px-0 ml-[250px] justify-center">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 w-[900px]">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 ">
            <Tab.Panel>
            <div className="grid gap-5 items-center justify-center grid-cols-4 w-[900px]">
            {
              data?.photos.map(image=>(
                <div className="w-[250px] h-[250px]">
                <img  className="pl-10  h-full w-full object-cover" src={`data:image/jpeg;base64,${image}`} />
                </div>
               
              ))
            }

</div>

            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}
