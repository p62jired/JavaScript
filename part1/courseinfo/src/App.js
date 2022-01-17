import React from 'react'
/**
 * Los corchetes toman la propiedad de un objeto directamente.
 * Es decir const {text} = props
const Title = ({text}) => <h1> {text}</h1>
 */
const Title = (props) => {
  return <h1> {props.text}</h1>
}
const Tema = ({text}) => <h2> {text}</h2>

const Ejercicios = ({text}) => <h2> Numero de ejercicios {text}</h2>

const Motivo = ({text}) => <h3>{text}</h3>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass datamod'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title text={course}/>
      <p>
      <Tema text={part1}/>
      </p>
      <p>
      <Ejercicios text={exercises1 + exercises2}/>
      </p>
      <p>
      <Motivo text={part2}/>
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
export default App