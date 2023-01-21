import styles from "./components/style";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LogoCloud from "./components/LogoCloud/LogoCloud";
import Features from "./components/Features/Features";
import Tracking from "./components/Tracking/Tracking";
import Momentum from "./components/Momentum/Momentum";
import Roadmap from "./components/Roadmap/Roadmap";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="bg-primary w-full overflow-auto min-h-screen relative h-[100vh]">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Logo Cloud */}
      <LogoCloud />

      {/* Feature Section */}
      <Features />
      {/* Tracking  */}
      <Tracking />
      {/* Momentum */}
      <Momentum />
      {/* Roadmaps */}
      <Roadmap />
      {/* Workflow */}
      <Workflow />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default App;
