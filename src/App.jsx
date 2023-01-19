import styles from "./components/style";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LogoCloud from "./components/LogoCloud/LogoCloud";
import Features from "./components/Features/Features";

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
    </main>
  );
};

export default App;
