import backdrop from "./images/backdrop.jpg"
import outstem_logo from "./images/outstem_logo_icon.png"

const Image = () =>{
    return (
        <div>
            <img src={backdrop} alt="back drop"/>
            <img src={outstem_logo} alt="outstem logo" Style="background: black"/>
        </div>
    )
}
export default Image