import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Card from "./components/Card";
import Duration from "./components/Duration";
import IncreasingProcess from "./components/IncreasingProcess";
import MyHero from "./components/MyHero";
import MyNav from "./components/MyNav";
import PostAutomation from "./components/PostAutomation";
import PreAutomation from "./components/PreAutomation";

function App() {
  return (
    <>
      <MyNav />
      <MyHero />
      <PreAutomation />
      <PostAutomation />
      <IncreasingProcess />
      <Duration />
    </>
  );
}

// {counting}

// const a = [1, 2, 3, 4, 5];
// for (var b = 0; b < a.length; b++) {
//   console.log(a[b]);
// }

export default App;
