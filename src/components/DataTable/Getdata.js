/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "antd";
import qs from "qs";
import React, { useEffect, useState } from "react";
import { SelectColumnFilter } from "../DataTable/index";
import apiClient from "../../api/apiClient";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import CrimeTable from "./CrimeTable";

const getData = () => {
	const data = [
		{
			name: "Jane Cooper",
			description: "Regional Paradigm Technician",
			code: "Optimization",
			suspect: "Admin",
		},
	];
	return [...data];
};
const getRandomuserParams = (params) => ({
	results: params.pagination?.pageSize,
	page: params.pagination?.current,
	...params,
});
function Getdata() {
	const token = localStorage.getItem("userToken");
	const dispatch = useDispatch();
	const [resultData, setResult] = useState();
	const [crimedata, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});

	const getReports = async () => {
		setLoading(true);
		const res = await apiClient.get(
			`/crimes?${qs.stringify(getRandomuserParams(tableParams))}`,
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
		setData(res.data)
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
		getReports()
	}, [JSON.stringify(tableParams)]);

	console.log(crimedata, "<<<<<<")

	console.log(crimedata, "<<<<<<");

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

	// const result = useQuery("crimes", getReports);

	// // if (result) dispatch(addData(result.data[0]));

	// const { isLoading, isError } = result;
	// // console.log(result.data, "hey roland am here ");

	const columns =  [
			{
				title: "Case Name",
				dataIndex: "name",
				// Cell: AvatarCell,
				// imgAccessor: "imgUrl",
				// emailAccessor: "email",
			},
			{
				title: "Description",
				dataIndex: "description",
			},
			// {
			//   Header: "Status",
			//   accessor: "status",
			//   Cell: StatusPill,
			// },
			{
				title: "Code",
				dataIndex: "code",
			},
			{
				title: "Suspect",
				dataIndex: "suspect",
				// Filter: SelectColumnFilter, // new
				// filter: "includes",
			},
		]

	const data = React.useMemo(() => getData(), []);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">
			<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
				<div className="">
					<h1 className="text-xl font-semibold">TAMPER PROOF SYSTEM</h1>
				</div>
				<div className="mt-6">
					<CrimeTable data={crimedata?.data}/>
				</div>
			</main>

		</div>
	);
}
export default Getdata;
