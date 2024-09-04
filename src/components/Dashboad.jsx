import Card from "./Card";
import SideBar from "./SideBar";
import TableComponent from "./TableComponent";

export default function Dashboad() {
  return (
    <section>
      <div className="row">
        <SideBar />
        <div className="dashboard">
          <div className="dash-header">
            <h2>Dasborad</h2>
            <p>Here's is the hostel at a glance</p>
          </div>
          <div className="card-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="data-row">
            <div className="percentage">
              <h2>Visit Sessions</h2>
              <div className="percentage-load">
                <h4>0%</h4>
              </div>
              <div className="tag-col">
                <div className="tag">
                  <span className="open-tag"></span> <p>Open</p>
                </div>
                <div className="tag">
                  <span className="open-tag close"></span> <p>Close</p>
                </div>
              </div>
            </div>
            <div className="table-col">
              <TableComponent />
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
