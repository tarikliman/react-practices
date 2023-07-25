import classes from './InvestmentTable.module.css';
const InvestmentTable = (props) => {

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution
      });
    }
    return(
      yearlyData.map((invest) => {
        return(
          <tr>
          <td>{invest.year}</td>
          <td>{invest.savingsEndOfYear}</td>
          <td>{invest.yearlyInterest}</td>
          <td>{invest.savingsEndOfYear - props.initialInvestment   - invest.yearlyContribution * invest.year}</td>
          <td>{props.initialInvestment + invest.yearlyContribution * invest.year}</td>
        
          </tr>
          
        );
      })
      );

  };

    return(
    <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
    {Object.keys(props.investData).length !== 0 && calculateHandler(props.investData)}
     
    </tbody>
  </table>
  );
}
export default InvestmentTable;
