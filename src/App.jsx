import "./App.css";
import Carou from "./Carou.jsx";

function App() {
  let slides=[
    "https://ik.imagekit.io/0wbtttf7n/kitmap/work1.jpg?updatedAt=1722615917041",
    "https://ik.imagekit.io/0wbtttf7n/kitmap/work3.jpg?updatedAt=1722615917017",
    "https://ik.imagekit.io/0wbtttf7n/kitmap/work4.jpg?updatedAt=1722615916972",
    "https://ik.imagekit.io/0wbtttf7n/kitmap/work2.jpg?updatedAt=1722615916969"
  ];

  return (
    <div className="w-[60%] m-auto pt-11">
      <Carou slides={slides} />
    </div>
  );
}

export default App;





