import React from 'react'
import Cartel from './Cartel'
import './styles.css'
export default function SeccionCarteles() {
    const Carteles = [
        {
            name: 'Cartel 1',
        },
        {
            name: 'Cartel 2',
        },
        {
            name: 'Cartel 3',
        },
        {
            name: 'Cartel 4',
        },
        {
            name: 'Cartel 5',
        },
        {
            name: 'Cartel 6',
        },
    ]
  return (
    <section className='general-data'>
        {
            Carteles.map((elm, idx)=> <Cartel key={`${idx}-${elm.name}`} data={elm} />)
        }
    </section>
  )
}
