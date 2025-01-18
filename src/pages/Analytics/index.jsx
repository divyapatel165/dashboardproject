import { CiDollar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsHandbagFill } from "react-icons/bs";

const Analytics = () => {
    return (
        <>
            <div id="analy">
                <section id="product">
                    <div><ul><li style={{ fontSize: "35px", color: "#1f889f" }}><CiDollar /></li>
                        <li>Total Sales<br />{"11226"}</li></ul> </div>
                    <div><ul> <li style={{ fontSize: "35px", color: "#1f889f" }}><CiShoppingCart /></li>
                        <li>Total Sales<br />{"19926"}</li></ul>
                    </div>
                    <div><ul>
                        <li style={{ fontSize: "35px", color: "#1f889f" }}><BsHandbagFill /></li>
                        <li>Total Sales<br />{"1176"}</li></ul></div>
                </section><br /><br />
                <section id="charts">
                    <ul>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "25px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "50px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "100px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "150px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "120px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "25px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "50px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "100px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "150px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "120px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "150px" }}></li>
                        <li style={{ backgroundColor: "rgb(23,4,5)", height: "120px" }}></li>
                    </ul>
                </section>    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <section id="lisec" style={{ height: "40px", width: "1000px", backgroundColor: "black", marginLeft: "120px", paddingLeft: "100px", color: "white" }}>
                  <p>Jan</p>
                 &nbsp;<p>Feb</p>
                 &nbsp; <p>March</p>
                  &nbsp; &nbsp; &nbsp;  <p>Apr</p>
                  &nbsp;<p>May</p>
                  <p>Jun</p>
                  &nbsp; &nbsp;<p>July</p>
                  &nbsp; &nbsp; &nbsp; <p>Aug</p>
                  &nbsp; <p>Sep</p>
                  &nbsp;<p>Oct</p>
                  &nbsp; &nbsp; <p>Nov</p>
                  &nbsp; &nbsp; &nbsp;<p>Dec</p>
                </section>
                <center><h1> Revenue per month </h1></center>
            </div>
        </>
    );
}
export default Analytics;