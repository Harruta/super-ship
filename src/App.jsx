import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Body from './components/Body';
import Stack from './components/Stack';
import PaymentPage from "./components/Paymentspage";

function App() {
  return (
    <Router> 
      <div>
        <Navbar />
        <Body />
        <Stack />
        <Routes>
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
