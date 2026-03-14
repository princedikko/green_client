import { useSelector } from "react-redux";

const CLIENTPrinting = () => {
  const printData = useSelector(
    (state) => state.clientFunction.printData.currentRows
  );
  const tab = useSelector((state) => state.clientFunction.printData.tab);

  if (!printData || printData.length === 0) return <p>No data</p>;

  // Dynamically get table headers from first object keys
  const headers = Object.keys(printData[0]);
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-wrapper">
      {/* PRINT BUTTON (will not appear on print) */}
      <div className="sales_no-print">
        <button onClick={handlePrint}>Print Page</button>
      </div>

      {/* PRINT CONTENT */}
      <div className={`sales_print-area ${tab}`}>
        <table className="fx-cl spacem">
          <thead className="fx-cl spacem">
            <tr>
              {headers.map((key) => (
                <th key={key}>
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="fx-cl spacem">
            {printData.map((row, index) => (
              <tr key={index}>
                {headers.map((key) => (
                  <td key={key}>
                    {typeof row[key] === "number"
                      ? row[key].toLocaleString() // format numbers
                      : row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="footer">Thank you for your business</p>
      </div>
    </div>
  );
};

export default CLIENTPrinting;
