import { Routes, Route } from "react-router"
import TwoPanelLayout from "./mainPage/TwoPanelLayout"

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TwoPanelLayout />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}