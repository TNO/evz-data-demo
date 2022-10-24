import {
  Link,
} from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="flex flex-col ml-5 mr-10">
        <Link to="/">Home</Link>
        <Link to="factsheet">Factsheet</Link>
        <Link to="crud">Crud</Link>
      </nav>
    </div>
  )
}