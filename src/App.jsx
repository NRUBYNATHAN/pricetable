
import "./App.css"
export default function App(){
return(
  <div className="bodys">
     <PriceList/>
  </div>
);
}
function PriceList(){
  const data=[
                {    what : "FREE",
                price : "$0",
                user : "Single User",
                gp : "5GB storage",
                limit: "Unlimited Public Projects",
                community : "Community Access",
                private : "Unlimited Private Projects",
                phone : "Dedicated Phone Support",
                free : "Free Subdomain",
                month : "Monthly Status Reports"},
                {    what : "PLUS",
                price : "$9",
                user : "5 Users",
                gp : "50GB storage",
                limit: "Unlimited Public Projects",
                community : "Community Access",
                private : "Unlimited Private Projects",
                phone : "Dedicated Phone Support",
                free : "Free Subdomain",
                month : "Monthly Status Reports"},
                {    what : "PRO",
                price : "$49",
                user : "Unlimited Users",
                gp : "150GB storage",
                limit: "Unlimited Public Projects",
                community : "Community Access",
                private : "Unlimited Private Projects",
                phone : "Dedicated Phone Support",
                free : "Unlimited Free Subdomain",
                month : "Monthly Status Reports"}]
  return(
    <div className="list">
       {data.map((ele)=>(<Price arr={ele}/>))}
    </div>
  );
}
function Price({arr}){

  return(
    <div className="total">
        <div className="first">
          <p>{arr.what}</p>
          <p className="price">{arr.price}<span className="month">/month</span></p>
        </div>
        <div className="second">
        <p>{arr.user}</p>
        <p>{arr.gp}</p>
        <p>{arr.limit}</p>
        <p>{arr.community}</p>
        <p>{arr.private}</p>
        <p>{arr.phone}</p>
        <p>{arr.free}</p>
        <p>{arr.month}</p></div>
        <button className="button">BUTTON</button>
    </div>
  );
}