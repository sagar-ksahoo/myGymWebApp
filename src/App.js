import "./App.css";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
    </div>
  );
}

export default App;
