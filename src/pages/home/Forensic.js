import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Forensics from "../../components/DataTable/Forensictable";
import store from "../../redux/store";

function Forensic() {
	const storeState = store.getState()
  console.log(storeState)
	return (
		<div>
			<div className="flex">
				<Sidebar />

				<div className="ml-[80px]">
					<Header />
				</div>
			</div>

			<div className="ml-3 mt-11">
				<Forensics   />
			</div>
		</div>
	);
}

export default Forensic;
