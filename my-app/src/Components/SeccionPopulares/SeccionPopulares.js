import React from 'react'
import Popular from './Popular'
import './styles.css'
export default function SeccionPopulares() {
    const populares = [
        {
            name: 'popular 1',
        },
        {
            name: 'popular 2',
        },
        {
            name: 'popular 3',
        },
        {
            name: 'popular 4',
        },
        {
            name: 'popular 5',
        },
        {
            name: 'popular 6',
        },
    ]
  return (
    <section className='general-data'>
        {
            populares.map((elm, idx)=> <Popular key={`${idx}-${elm.name}`} data={elm} />)
        }
    </section>
  )
}
