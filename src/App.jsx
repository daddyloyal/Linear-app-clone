import styles from "./components/style";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Button from "./components/Button";
import LogoCloud from "./components/LogoCloud";

const App = () => {
  return (
    <main className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Navbar */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Logo Cloud */}
      <LogoCloud />
    </main>
  )
}

export default App