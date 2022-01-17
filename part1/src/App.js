import './App.css';
import Mensaje from './Mensaje'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
        <Mensaje color= 'red' msg='Estamos trabajando ' />
        <Mensaje color= 'green' msg='en un curso' />
        <Mensaje color= 'black' msg=' de React' />

      </p>
    </div>
  )
}



export default App;
