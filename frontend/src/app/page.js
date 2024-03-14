import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Ratings from "./Component/Ratings";

export default function Home() {
  return (
  <div>
  <Navbar/>
  <h3 className="p-3">The best movie reviews site!</h3>
  <div className="input-group w-50 p-3">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
  </div>
  <Ratings/>
  <Footer/>
  </div>
  );
}
