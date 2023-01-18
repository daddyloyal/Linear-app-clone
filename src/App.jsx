import styles from "./style"

const App = () => {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={ `${styles.boxWidth} text-white` }>
          Navbar
        </div>
      </div>

      <div className={ `bg-primary ${styles.boxWidth} text-white`}>
          Hero
      </div>
    </main>
  )
}

export default App