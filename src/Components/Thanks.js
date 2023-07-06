import NavBar from "./NavBar";
import IMG from '../svg/223070-P1PI68-130.jpg';

export default function Thanks(){
    return (
    <div>
        <NavBar />
    <div>
        <img className="imgg" src={IMG} />
        <h2 className="h21"> The order will be delivered to you within a few days</h2>
        <h2 className="h22">Thank you for ordering from us</h2>
    </div>      
     </div>
    
    )
}