import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      
<Header></Header>
<Auth></Auth>
<Counter />
    </Fragment>
  );
}

export default App;
