import logo from "../logo.svg"
import "./HelloCss.css"
import HelloWhite from "./HelloWhite"
import HelloYellow from "./HelloYellow"


export default function HelloCss() {

  return (
    <div className="hellomain">
        <img src = {logo} className="lg" alt="logo" />
        <h1 className="ch1">안녕하세요!</h1>
        <HelloWhite />
        <HelloYellow />
    </div>
  )
}