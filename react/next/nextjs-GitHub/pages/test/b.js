import React, { useState, useEffect } from 'react'
// class MyCount extends React.Component {
//     state = {
//         count: 0
//     }

//     componentDidMount() {
        
//     }

//     componentWillUnmount() {
//         if(this.interval){
//             clearInterval(this.interval)
//         }
//     }
//     render() {
//     return <span>{this.state.count}</span>
//     }
// }

function myCountFunc() {
    const [count, setCount] = useState(0)
    useEffect (() => {
        const interval = setInterval(() => {
            setCount(c =>c+1)
        }, 1000);
        return () => clearInterval(interval) 
    },[])
return <span>{count}</span>
}

export default myCountFunc