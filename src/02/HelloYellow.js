import styles from "./HelloYellow.module.css"
export default function HelloYellow() {
    const st = {
        color : "yellow",
        fontsize : "30px",
        fontweight : "bold"
    }

    return (
    <div>
      <h1 className={styles.ch1}>안녕하세요!</h1>
    </div>
  )
}