import styles from "./style"

const Hero = () => {
  return (
    <main>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Hero
          </div>
      </div>
    </main>
  )
}

export default Hero