import {Link, Routes, Route} from "react-router-dom"
import EmpSalary from "./employee/empsalary";
import EmployeeList from "./employee/employeelist";
function App() {

  return (
    <>
    <h1>This is main page </h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/employeelist">EmployeeList</Link></li>
      <li><Link to="/empsalary">EmpSalary</Link></li>
    </ul>
    <Routes>
      <Route path="/empsalary" element={<EmpSalary />} />
      <Route path="/employeelist" element={<EmployeeList />} /> 
    </Routes>
    </>
  );
}

export default App;
