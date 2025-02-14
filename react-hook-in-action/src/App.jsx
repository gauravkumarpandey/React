import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
import "./App.css"
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa"
import UserPicker from "./components/users/UserPicker"
import BookingsPage from "./components/bookings/BookingsPage"
import BookablesPage from "./components/bookables/BookablesPage"
import UsersPage from "./components/users/UsersPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link
                  to="/bookings"
                  className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
                <Link
                  to="/bookables"
                  className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
                <Link
                  to="/users"
                  className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>

          <UserPicker />
        </header>

        <Routes>
          <Route
            path="/bookings"
            element={<BookingsPage />}
          />
          <Route
            path="/bookables"
            element={<BookablesPage />}
          />
          <Route
            path="/users"
            element={<UsersPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
