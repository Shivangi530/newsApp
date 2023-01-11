import img3 from "./components/img3.png";
import img4 from "./components/img4.png";
import img5 from "./components/img5.png";
import Navbar from "./components/Navbar";
import News1 from "./components/News1";
import News2 from "./components/News2";
import News3 from "./components/News3";
import News4 from "./components/News4";
import News5 from "./components/News5";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="news">
        <News1/>
        <News2 />
        <News3 />
        <News4 />
        <News5 />
      </div>
    </div>
  );
}

export default App;
