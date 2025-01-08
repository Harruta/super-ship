import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Body from './components/Body';
import Stack from './components/Stack';
import PaymentPage from "./components/Paymentspage";
import ProductDescription from "./components/productdescription";

function App() {
  return (
    <Router> 
      <div>
        <Navbar />
        <Body />
        <Stack />
        <ProductDescription/>
        <Routes>
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
