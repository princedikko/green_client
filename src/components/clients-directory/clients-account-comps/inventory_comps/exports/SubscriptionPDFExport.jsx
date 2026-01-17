import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import Roboto from "../../../../../../src/fonts/Roboto-Medium.ttf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

Font.register({
  family: "Roboto",
  src: Roboto,
});
// 1. Create styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 8,
  },
  table: {
    display: "table",
    width: "auto",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "#bfbfbf",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 4,
    color: "#333",
  },
  evenRow: {
    backgroundColor: "#fff", // light gray
  },
  oddRow: {
    backgroundColor: "#efd3d2ee", // white
  },
  tableCol: {
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  tableHeader: {
    backgroundColor: "#dd716d",
    color: "white",
    fontWeight: "bold",
    borderRadius: 4,
    fontSize: 10,
  },
});

// 2. PDF Document Component
const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{ marginBottom: 10, fontSize: 10 }}>Subscriptions</Text>
      <View style={styles.table}>
        {/* Header */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCol, { width: 140, fontWeight: "bold" }]}>
            Customer Name
          </Text>
          <Text style={[styles.tableCol, { width: 70 }]}>Invoice No.</Text>
          <Text style={[styles.tableCol, { width: 60 }]}>Quantity</Text>
          <Text style={[styles.tableCol, { width: 100 }]}>Total Amount</Text>
          <Text style={[styles.tableCol, { width: 100 }]}>Total Paid</Text>
          <Text style={[styles.tableCol, { width: 80 }]}>Sell Due</Text>
          <Text style={[styles.tableCol, { width: 80 }]}>Date</Text>
          <Text style={[styles.tableCol, { width: 80 }]}>Pay Status</Text>
        </View>

        {/* Rows */}
        {data.map((item, index) => (
          <View
            style={[
              styles.tableRow,
              index % 2 === 0 ? styles.evenRow : styles.oddRow, // alternate colors
            ]}
            key={item.invoiceNo}
          >
            <Text style={[styles.tableCol, { width: 140, fontWeight: "bold" }]}>
              {" "}
              {item.customerName}{" "}
            </Text>
            <Text style={[styles.tableCol, { width: 70 }]}>
              {" "}
              {item.invoiceNo}{" "}
            </Text>
            <Text style={[styles.tableCol, { width: 60, textAlign: "center" }]}>
              {item.quantity}{" "}
            </Text>

            <Text style={[styles.tableCol, { width: 100 }]}>
              {" "}
              ₦{item.totalAmount.toLocaleString()}{" "}
            </Text>
            <Text style={[styles.tableCol, { width: 100 }]}>
              {" "}
              ₦{item.totalPaid.toLocaleString()}{" "}
            </Text>

            <Text style={[styles.tableCol, { width: 80 }]}>
              ₦{item.sellDue.toLocaleString()}{" "}
            </Text>
            <Text style={[styles.tableCol, { width: 80 }]}>{item.date}</Text>
            <Text style={[styles.tableCol, { width: 80 }]}>
              {" "}
              {item.paymentStatus}{" "}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// 3. Button Component
const ExportPDFButton = ({ currentRows }) => (
  <PDFDownloadLink
    document={<PDFDocument data={currentRows} />}
    fileName="sales_table.pdf"
  >
    {({ loading }) =>
      loading ? (
        <span style={{ fontSize: "1rem" }}> Preparing PDF...</span>
      ) : (
        <button className="iconBtn">
          <PictureAsPdfIcon fontSize="large" />
        </button>
      )
    }
  </PDFDownloadLink>
);

export default ExportPDFButton;
