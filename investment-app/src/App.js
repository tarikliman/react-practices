import { useState } from 'react';
import Header from './Header/Header';
import CalculateForm from './CalculateForm/CalculateForm';
import InvestmentTable from './InvestmentTable/InvestmentTable';
function App() {
 const [investData, setInvestData] = useState({});


  return (
    <div>
      <Header/>
      <CalculateForm investData = { (e) => {setInvestData(e)} }/>
      <InvestmentTable investData = {investData} initialInvestment = {investData['current-savings']}/>
    </div>
  );
}

export default App;
