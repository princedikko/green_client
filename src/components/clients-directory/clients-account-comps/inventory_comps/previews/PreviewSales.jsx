import "./previewSales.css";
import Logo from "./preview_images/asd.png";

export default function PreviewSales() {
  return (
    <div className="wrapPreviewSales">
      <div className="contPreviewSales fx-cl space4">
        <header className="fx-cl space1">
          <div className="contPreviewSalehBDR fx-ac fx-jb space2">
            <div className="fx-ac spacem">
              <figure className="logoPreviewSales">
                <img src={Logo} alt="" />
              </figure>
              <div className="fx-cl ">
                <span>Icebag Media</span>
                <h3>Your Elite Partner</h3>
              </div>
            </div>
            <p>Icebag media | Invoice majestro ltd</p>
          </div>
          <h2>Sold Details</h2>
        </header>
        <div className="PreviewSalesDetails fx-jb space4">
          <div className="fx-cl spacem">
            <h3>Sold to: </h3>
            <div className="fx-cl space2">
              <strong>Exceptional Customer</strong>
              <p className="fx-cl spacem">
                <span>
                  <strong>Usman Animal Husbandry</strong>
                </span>
                <span>No. 2298 Opp. ASDF Sokoto Abuja</span>
                <span>Ref: KL45KL6KLHJ7</span>
                <span>080123456789</span>
              </p>
            </div>
          </div>

          <div className="fx-cl space1">
            <div className="fx-cl">
              <strong>Invoice due Date</strong>
              <p>22 November 2026</p>
            </div>
            <div className="fx-cl">
              <strong>Attended by</strong>
              <p>Salman FR</p>
            </div>
            <div className="fx-cl">
              <strong>Location</strong>
              <p>Nana Mall Mabera</p>
            </div>
          </div>
        </div>
        <div className="previewSalesFigure fx-ac">
          <div className="fx-cl">
            <strong>Invoice due Date</strong>
            <p>22 November 2026</p>
          </div>

          <div className="fx-cl">
            <strong>Transaction Ref No.:</strong>
            <p>2ASF8AD96786D78SF786</p>
          </div>
          <div className="fx-cl">
            <strong>Date Sold</strong>
            <p>22 November 2026</p>
          </div>
          <div className="fx-cl">
            <strong>Purchase Order No:</strong>
            <p>as345245/3453/436</p>
          </div>
        </div>
        <figure className="previewSalesBar">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </figure>
        <div className="fx-cl">
          <div className="previewSalesTableBar fx-ac">
            <div className="fx-cl">
              <strong>Attended by Salman af</strong>
              <strong> by Salman afreghs</strong>
              <strong> by cdegds af</strong>
            </div>
            <div className="fx-cl">
              <strong>Attended by</strong>
              <p>Salman FR asdf df asdfas</p>
            </div>
            <div className="fx-cl">
              <strong>Attended by</strong>
              <p>Salman FR asdf df asdfas</p>
            </div>
          </div>
          <table className="fx-cl  ">
            <thead className="fx-cl  ">
              <tr>
                <th>Item</th>
                <th>Selling Price</th>
                <th>Quantity</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody className="fx-cl">
              <tr>
                <td>01 Milk</td>
                <td>N3,450</td>
                <td>01</td>
                <td>Nana Ma</td>
              </tr>
              <tr>
                <td>01 Milk</td>
                <td>N3,450</td>
                <td>01</td>
                <td> Mall Mabera</td>
              </tr>
              <tr>
                <td>01 Milk</td>
                <td>N3,450</td>
                <td>01</td>
                <td>Nana Mabera</td>
              </tr>
              <tr>
                <td>01 Milk</td>
                <td>N3,450</td>
                <td>01</td>
                <td>Nana Malls</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="baseDetails fx-jb space6">
          <div className="buttomLeftDetails fx-cl space1">
            <span>
              <strong>Payment Method</strong>
            </span>
            <p className="fx-cl space">
              <span>
                <strong>By Bank </strong>
              </span>
              <span>
                <strong>Bank name: </strong> Universe Tech. Ind.
              </span>
              <span>
                <strong>Service Code: </strong>5KLJ574K6KL745674
              </span>
              <span>
                <strong>Account No.: </strong>76574574678567
              </span>
            </p>
            <p className="fx-cl spacem">
              <span>
                <strong> By online</strong>
              </span>
              <span>
                <strong>Flutterwave: </strong> Universe Inventory
              </span>
              <span>
                <strong>Payment: </strong>Bank account transfer used by the
                client
              </span>
            </p>
          </div>
          <div className="fx-cl fx-ac fx-jc space1">
            <div className="fx-cl space1">
              <div className="g g2 space2">
                <span>
                  <strong>Subtotal: </strong>
                </span>
                <span>
                  <strong>N6,765 </strong>
                </span>
              </div>
              <div className="g g2 space2">
                <span>Tax VAT: 7.2%</span>
                <span>N2,342</span>
              </div>
              <div className="g g2 space2">
                <span>Discount: 3.2%</span>
                <span>N5,764</span>
              </div>
            </div>
            <div className="grandToltalPreviewSales g g2">
              <span>Grand Total:</span>
              <span>N65,764</span>
            </div>
            <div className="fx-cl fx-ac fx-jc spacem">
              <span>Account Manager</span>
              <span>
                <strong>FAHAD LABBO LAMIDO</strong>
              </span>
              <span>
                <img src="" alt="sign" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="fx-ac fx-jc">
            <figure className="logoPreviewSales">
              <img src={Logo} alt="" grayscale />
            </figure>
            <div className="fx-ac space3">
              <p>UNIVERSE INVENTORY MANAGEMENT</p>
              <span>www.universeinventory.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
