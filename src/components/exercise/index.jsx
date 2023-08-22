import React from 'react'
import UseState from './State'
import {data} from './data'
import PropsEx from './PropsEx'
import UseEffect from './UseEffect'
import ApiCall from './ApiCall'
import UseContext from './UseContext'
import CounterRedux from '../CounterRedux'

const Index = () => {
  return (
    <div>
        <UseState />

        <PropsEx name={data.name}  />

        <div className='contained propsEx'>
          <h2 className='text-head'>Props Example : - Contact List</h2>
          
          {data.map((elem,index)=>{
            return <PropsEx key={elem.id} name={elem.name} age={elem.age} phone={elem.phone} address={elem.address} />
          })}
         </div>

          <UseEffect />

          <UseContext />

          <ApiCall />

          <CounterRedux />

          
      
          


    </div>
    
    
      
  )
}

export default Index