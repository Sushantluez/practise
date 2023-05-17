import React from 'react'
import DisplaySection from './DisplaySection'

const HomePages = () => {

  const person = {
    name: 'hari',
    age: 25
  };

  const greet = () => {
    alert('hello user');
  }
  return (
    <div>
      <h1>this is home page</h1>

      <DisplaySection age='lio' rating={90} person={person} greet={greet} />
    </div>
  )
}

export default HomePages