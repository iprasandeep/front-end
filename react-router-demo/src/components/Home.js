import {useNavigate} from 'react-router-dom'
export const Home = () =>{
    const navigate =  useNavigate()

    return  (
        <>
        <div><h3>Home Page</h3></div>
        <button onClick={()=>navigate('order-summary', {replace: true})}> Place Order</button>
        </>
    )
    
}
