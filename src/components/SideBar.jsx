import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <section>
        <div className="side-bar-col">
          <div className="side-bar-header">
            <h2>EFSH</h2>
            <p>Monday 6th November, 2024</p>
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">widgets</span>
                  Dashbord
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Visitors"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">group</span>
                  Visitors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/visit-logs"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">file_open</span>
                  Visit Logs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/key-logs"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">passkey</span>
                  Key Logs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/residents"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">
                    location_away
                  </span>
                  Residents
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rooms"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">
                    meeting_room
                  </span>
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  <span className="material-symbols-outlined">settings</span>
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="side-bar-btn">
            <button>Logout</button>
          </div>
        </div>
      </section>
    </>
  );
}
