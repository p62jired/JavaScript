import React from 'react'
/**
 * Los corchetes toman la propiedad de un objeto directamente.
 * Es decir const {text} = props
const Header = ({text}) => <h1> {text}</h1>
 */
const Header = (props) => {
  return <h1> {props.text}</h1>
}
const Content = ({p1,p2,p3}) => {  
return (
    <div>
      <h1>Part 1:  {p1}</h1>
      <h1>Part 2:  {p2}</h1>
      <h1>Part 3:  {p3}</h1>
    </div>
  )
}
const Total = ({text}) => <h2>{text}</h2>



const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
      <Header text={course}/>
      <p>
      <Content p1={part1.name} p2={part2.name} p3={part3.name}/>
      </p>
      <p>
      <Total text={part1.exercises + part2.exercises + part3.exercises}/>
      </p>
    </div>
  )
}
export default App