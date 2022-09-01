import React from 'react';
import About from './Components/About'
import Footer from './Components/Footer'
import Info from './Components/Info'
import Interests from './Components/Interests'


export default function App(){
    return (
        <div className="card">
            <Info/>
            <main>
                <About/>
                <Interests/>
            </main>
            <Footer/>
        </div>
    )
}