import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paymentspage from './components/Paymentspage'; 

const payments = () => {
  return (
    <div>
       <Router>
      <div>
        {/* Only routing for the payment page */}
        <Routes>
          <Route path="/payment" element={<Paymentspage />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default payments