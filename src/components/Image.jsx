import backdrop from "./images/backdrop.jpg"
import outstem_logo from "./images/outstem_logo_icon.png"

const Image = () =>{
    return (
        <div className="image">
            <img src={backdrop} className="image__backdrop" alt="back drop"/>
            <img src={outstem_logo} className="image__outstem" alt="outstem logo"/>
        </div>
    )
}
export default Image