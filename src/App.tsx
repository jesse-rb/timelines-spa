import { useState } from 'react'
import './App.css'
import { TimeZoneContext } from './Contexts'
import TimeZone from './TimeZone'
import ChildComponent from './ChildComponent'


function App() {

    const [timeZone, setTimeZone] = useState('UTC')

    return (
        <>
            <TimeZoneContext value={timeZone}>
                <TimeZone setTimeZone={setTimeZone}></TimeZone>
                <ChildComponent></ChildComponent>
            </TimeZoneContext>
        </>
    )
}

export default App
