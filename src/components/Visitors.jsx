import SideBar from "./SideBar";
import TableComponent from "./TableComponent";

export default function Dashboad() {
  return (
    <section>
      <div className="row">
        <SideBar />
        <div className="dashboard">
          <div className="dash-header">
            <h2>Visitors</h2>
            <p>Here's is the hostel at a glance</p>
          </div>
          <div className="btn-add">
            <button>Add Visitor</button>
          </div>
          <div className="data-row">
            <div className="table-col">
              <TableComponent />
              {/* <TableComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
