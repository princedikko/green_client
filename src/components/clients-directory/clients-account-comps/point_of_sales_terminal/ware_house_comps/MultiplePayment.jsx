import "./multiplePayment.css";

import Im from "../images/im.png";
import Mi from "../images/mi.png";
import Mm from "../images/mm.png";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import LayersClearIcon from "@mui/icons-material/LayersClear";

export default function MultiplePayment() {
  return (
    <section className="sectionMultiPay" onClick={(e) => e.stopPropagation()}>
      <div className="multipaycont fx-cl space2">
        <div className="fx-cl multipayDisc fx-cl space1">
          <div className="fx-ac space4 fx-jb">
            <div className="multiTitle fx-ac space1">
              <figure className="multiTitleIcon fx-ac fx-jc">
                <LayersClearIcon fontSize="large" />
              </figure>
              <h2>Multiple Payment</h2>
            </div>
            <div className="fx-ac spacem">
              <AppsOutlinedIcon />
              <AppsOutlinedIcon />
              <AppsOutlinedIcon />
            </div>
          </div>
          <div className="multiPayContents fx-cl space2">
            <div className="fx-ac fx-jb space4">
              <div className="fx-cl spacem">
                <strong>Cash Payment</strong>
                <p className="multiSubHead">Cash payment lorem ipsum</p>
              </div>
              <div className="fx-ac">
                <strong style={{ color: "#3a84f8" }}>Method:</strong> Cash
              </div>
            </div>
            <div className="multiPayDiscriptionInput multipayInputCont fx-ac fx-jb space2">
              <img src={Mi} alt="" />
              <input type="text" placeholder="Enter the Discription..." />
              <img src={Im} alt="" />
            </div>
          </div>
          <div className="fx-ac fx-jb space2">
            <div className="fx-cl">
              <strong>Amount</strong>
              <span className="multiSubHead"> 3 or 4 numbers on the card</span>
            </div>
            <div className="multiColInp fx-ac space2">
              <div className="multipayInputCont fx-ac fx-jb">
                <input type="text" placeholder="234434" />

                <AppsOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="fx-ac fx-jb space2">
            <div className="fx-cl">
              <strong>Invoice</strong>
              <span className="multiSubHead"> 3 or 4 numbers on the card</span>
            </div>
            <div className="multiColInp fx-ac space1">
              <div className="multipayInputCont" style={{ width: "50%" }}>
                <input type="text" placeholder="05" style={{ width: "100%" }} />
              </div>
              <div className="multipayInputCont" style={{ width: "50%" }}>
                <input type="text" placeholder="43" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className="fx-ac fx-jb space2">
            <div className="fx-cl">
              <strong>Payment Account</strong>
              <span className="multiSubHead"> 3 or 4 numbers on the card</span>
            </div>
            <div className="multiColInp fx-ac space2">
              <div className="multipayInputCont fx-ac fx-jb">
                <input type="text" placeholder="None" />
                <AppsOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="fx-ac">
            <button
              className="multiPaySubmit"
              onClick={() => alert("Success!")}
            >
              Pay Now
            </button>
          </div>
        </div>
        <div className="multipayAside fx-jb fx-cl">
          <div>&nbsp;</div>
          <div className="fx-cl">
            <div className="card fx-cl fx-jb space3">
              <figure className="upperCard"></figure>
              <div>&nbsp;</div>
              <div className="fx-cl spacem">
                <div className="fx-jb fx-ac spacem">
                  <span>Company</span> <strong>Jool</strong>
                </div>
                <div className="fx-jb fx-ac spacem">
                  <span>Ordered number</span> <strong>543543</strong>
                </div>
                <div className="fx-jb fx-ac spacem">
                  <span>Product</span> <strong>MackbookAir</strong>
                </div>
                <div className="fx-jb fx-ac spacem">
                  <span>VAT {`(2.7%)`}</span> <strong>₦43,453</strong>
                </div>
              </div>
              <span className="lftG">&nbsp;</span>
              <span className="rghG">&nbsp;</span>
            </div>
            <div className="card" style={{ borderTop: "1px dashed #999" }}>
              <div className="fx-jb spacem">
                <div className="fx-cl">
                  <span>total to pay</span>
                  <h3>₦256.015</h3>
                </div>
                <AppsOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
