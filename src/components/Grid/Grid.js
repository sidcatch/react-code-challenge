import "./Grid.css";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map((colName, index) => (
            <th key={index}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, valIndex) => (
          <tr key={valIndex}>
            {header.map((colName) => {
              return !Array.isArray(row[colName]) ? (
                <td
                  key={colName}
                  className={`${!isNaN(row[colName]) ? "alignRight" : ""}`}
                >
                  {row[colName]}
                </td>
              ) : (
                <td key={colName}>{row[colName].map((data) => data + "\n")}</td>
              );
            })}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action, showAction }, index) => {
                  return showAction(row) ? (
                    <button onClick={() => action(row, valIndex)} key={index}>
                      {label}
                    </button>
                  ) : null;
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
