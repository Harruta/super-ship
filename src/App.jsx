import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Body from './components/Body';
import Stack from './components/Stack';
import PaymentPage from "./components/Paymentspage";

function App() {
  return (
    <Router>  {/* Wrap the entire layout with Router */}
      <div>
        {/* Static components */}
        <Navbar />
        <Body />
        <Stack />

        {/* Add the Routes inside App */}
        <Routes>
          {/* Add other routes */}
          <Route path="/" element={<Body />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* Payment route here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
