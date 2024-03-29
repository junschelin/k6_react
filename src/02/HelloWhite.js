import styles from "./HelloWhite.module.css"

export default function HelloWhite() {
    const st = {
        color : "white",
        fontsize : "30px",
        fontweight : "bold"
    }

    return (
    <div>
      <h1 style={st}>안녕하세요!</h1>
    </div>
  )
}
