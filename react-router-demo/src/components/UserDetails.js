import { useParams } from 'react-router-dom';

export const UserDetails = () =>{
  const { userId} = useParams()
    return (
        <div>
           <h2> Details About Users:  {userId} </h2>
        </div>
    )
}
