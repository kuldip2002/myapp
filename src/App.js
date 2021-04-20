
import './App.css';
const name = 'Netflix';
const Ftitle = 'top 5';
const Stitle = 'best Webseries';
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
const img3 = "https://picsum.photos/id/237/200/300";

function App() {
  return (
    <>
<h1 style ={{color: "#FF0000", textAlign:"center"}}> {name} </h1>
<p> {` ${Ftitle} ${Stitle}`}  </p>
<ol>
  <li>Stranger Things</li>
  <li>Derek</li>
  <li>Ratched</li>
  <li>White Lines</li>
  <li>The Serpent</li>
</ol>
<p> current Date is - {currentDate} </p>
<p> current Time is - {currentTime}</p>
<div className="img_div">
<img  src={img1} alt="random"/>
<img  src={img2} alt="random"/>
<img  src={img3} alt="random"/>
</div>
</>
  );
}

export default App;
