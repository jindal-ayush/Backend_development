import './App.css'

import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Table from './components/User_form';

function App() {  
  return (
    <div>

     <Table/>
      <Users/>
      <CreateUser/>
    <UpdateUser/>
    </div>
  );
}
export default App;
