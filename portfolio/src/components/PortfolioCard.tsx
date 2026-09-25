import { Link } from "react-router";

export default function PortfolioCard() {
  return (
    <div>
        <Link to="/article"> 
      <h3>Project Title</h3></Link>
      <p>Short description about project</p>
    </div>
  );
}
