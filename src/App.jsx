import styles from "./components/style";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Button from "./components/Button";

const App = () => {
  return (
    <main className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Navbar */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Logo Cloud */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            
          </div>
      </div>
    </main>
  )
}

export default App