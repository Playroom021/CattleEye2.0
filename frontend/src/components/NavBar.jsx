import { Link, NavLink } from "react-router-dom";

export default function NavBar() {

  const navClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-green-700 font-semibold"
        : "text-gray-600 hover:text-green-700"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs transition-colors ${
      isActive
        ? "font-semibold text-green-700"
        : "text-gray-500"
    }`;

  return (
    <>
      {/* =========================
          TOP NAVBAR
      ========================== */}

      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-md">

        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl text-white shadow-sm">
              🐄
            </div>

            <div>

              <h1 className="text-lg font-bold tracking-tight text-gray-900">
                CattleEye
              </h1>

              <p className="hidden text-[10px] font-medium uppercase tracking-widest text-gray-400 sm:block">
                AI Cattle Intelligence
              </p>

            </div>

          </Link>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-7 md:flex">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/history"
              className={navClass}
            >
              History
            </NavLink>

            <NavLink
              to="/analytics"
              className={navClass}
            >
              Analytics
            </NavLink>

          </nav>


          {/* Right Side */}

          <div className="flex items-center gap-3">

            <button
              className="
                hidden
                rounded-full
                border
                border-gray-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-gray-700
                transition
                hover:border-green-300
                hover:text-green-700
                sm:block
              "
            >
              About
            </button>

            <button
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-green-700
                text-sm
                font-bold
                text-white
                shadow-sm
                transition
                hover:bg-green-800
              "
            >
              GS
            </button>

          </div>

        </div>

      </header>


      {/* =========================
          MOBILE BOTTOM NAVIGATION
      ========================== */}

      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          border-t
          border-gray-200
          bg-white/95
          shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          md:hidden
        "
      >

        <div className="mx-auto flex max-w-md items-center px-2">

          <NavLink
            to="/"
            className={mobileNavClass}
          >

            <span className="text-xl">
              🏠
            </span>

            <span>
              Home
            </span>

          </NavLink>


          <NavLink
            to="/history"
            className={mobileNavClass}
          >

            <span className="text-xl">
              📋
            </span>

            <span>
              History
            </span>

          </NavLink>


          <NavLink
            to="/analytics"
            className={mobileNavClass}
          >

            <span className="text-xl">
              📊
            </span>

            <span>
              Analytics
            </span>

          </NavLink>

        </div>

      </nav>


      {/* Prevent mobile content from being hidden behind bottom nav */}

      <div className="h-16 md:hidden" />

    </>
  );
}