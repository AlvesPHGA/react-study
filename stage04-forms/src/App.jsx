import React from 'react';
import Checkbox from './components/Form/Checkbox';
import Form from './components/Form/Form';

function App() {
   const [form, setForm] = React.useState('');
   const [therms, setTherms] = React.useState(false);
   const [colors, setColors] = React.useState([]);

   return (
      <>
         <form>
            <Checkbox colors={colors} setColors={setColors} />
         </form>
         {therms}
      </>
   );
}

export default App;
