import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLink = (path) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "text-green-600 font-semibold"
        : "text-gray-600 hover:text-green-600"
    }`;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-green-600"
        >
          🐄 CattleEye
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className={navLink("/")}>
            Home
          </Link>

          <Link to="/history" className={navLink("/history")}>
            History
          </Link>
        </nav>

      </div>
    </header>
  );
}