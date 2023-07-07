import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ImmigrationTable from "../../components/DataTable/ImmigrationTable";
import store from "../../redux/store";

function Immigration() {
	const storeState = store.getState();
	console.log(storeState);
	return (
		<div>
			<div className="flex">
				<Sidebar />

				<div className="ml-[80px]">
					<Header />
				</div>
			</div>

			<div className="ml-3 mt-11">
				<ImmigrationTable />
			</div>
		</div>
	);
}

export default Immigration;
