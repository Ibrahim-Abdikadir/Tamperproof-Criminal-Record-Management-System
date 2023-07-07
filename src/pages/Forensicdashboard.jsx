import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Forensictable from "../components/DataTable/Forensictable";

function Forensicdashboard() {
	//

	return (
		<div>
			<div className="flex">
				<Sidebar />

				<div className="ml-[80px]">
					<Header />
				</div>
			</div>

			<div className="ml-3 mt-11">
				<Forensictable />
			</div>
		</div>
	);
}

export default Forensicdashboard;
