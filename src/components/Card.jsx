export default function Card() {
  return (
    <div className="card-col">
      <div className="card">
        <div className="card-content">
          <h2 className="number">6</h2>
          <p className="visit-logs">Open Visit Logs</p>
        </div>
        <div className="card-icon">
          <span className="material-symbols-outlined">database</span>
        </div>
      </div>
      <button>Log Visit</button>
    </div>
  );
}
