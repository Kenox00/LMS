import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Home/dashboard/Dashboard';
import Navbar from './components/defaults/navbar/Navbar';
import Menu from './components/defaults/menu/Menu';
import Overdue from "./components/Home/Overdue/Overdue";
import Reservation from "./components/Reservation/Reservation";
import Books from "./components/Books/Books";
import Borrowing from "./components/Borrowing/Borrowing";
import ErrorBoundary from "./components/Common/ErrorBoundary";


function App() {
  return (
    <Router>
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          } />
          <Route path="/borrowing" element={
            <ErrorBoundary>
              <Borrowing />
            </ErrorBoundary>
          } />
          <Route path="/books" element={
            <ErrorBoundary>
              <Books />
            </ErrorBoundary>
          } />
          <Route path="/overdue" element={
            <ErrorBoundary>
              <Overdue />
            </ErrorBoundary>
          } />
          <Route path="/reservation" element={
            <ErrorBoundary>
              <Reservation />
            </ErrorBoundary>
          } />
        </Routes>
      </Router>

  );
}

export default App;
