import { Routes, Route } from "react-router"

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}