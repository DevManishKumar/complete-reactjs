import React from 'react'
import { Link } from 'react-router-dom'
import Index from '../exercise'

const Exercise = () => {
  return (
    <div className='exercise_main'>
        
        <div className='sidebar'>

            <ol className='sidebar_Items'>
                <li className='sidebar_item'><Link to={""}>What is React</Link></li> <br/>
                <li className='sidebar_item'> <Link to={"/react-redux"}>Redux in Reactjs</Link></li><br/>
                <li className='sidebar_item'>Hook in React</li><br/>
                <li className='sidebar_item'>React Event Handling</li><br/>
                <li className='sidebar_item'>React Components</li><br/>
                <li className='sidebar_item'>Routing in React</li><br/>
                <li className='sidebar_item'>React State and Props</li><br/>
                <li className='sidebar_item'>Context API & Context Reducer</li><br/>
                <li className='sidebar_item'> API Call in React</li>
            </ol>

        </div>

        <div className='content'>
               <Index />
        </div>

    </div>
  )
}

export default Exercise