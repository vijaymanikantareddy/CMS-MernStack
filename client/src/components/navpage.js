import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './mainpage'
import Ch from '../pages/ch'
import Cr from '../pages/cr'
import Cf from '../pages/cf'

function Navpage() {
  return (
    <><React.Fragment>
        <section>
            <Routes>
                <Route path='/ch' element={<Ch/>}/>
                <Route path='/cf' element={<Cf/>}/>
                <Route path='/cr' element={<Cr/>}/>
            </Routes>
        </section>
    </React.Fragment>
    </>
  )
}

export default Navpage