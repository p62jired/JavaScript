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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text={course}/>
      <p>
      <Content p1={part1} p2={part2} p3={part3}/>
      </p>
      <p>
      <Total text={exercises1 + exercises2 + exercises3}/>
      </p>
    </div>
  )
}
export default App