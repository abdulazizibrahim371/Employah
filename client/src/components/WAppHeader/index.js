import { Button } from "antd"

function WAppHeader() {
    return(
        <>
            <div className="WAppHeader"><h1><u>Employah!</u></h1>
           <ul>
                <a href="home"><li>Home</li></a>
                <a href="employers"><li>Employers</li></a>
                <a href="resources"><li>Resources</li></a>
                <a href="contact_us"><li>Contact Us</li></a>
                <a href="about"><li>About</li></a>

           </ul>
           <Button className="logRegBtn">Login/Register</Button>
            </div>
            
        </>
    )
    
}
export default WAppHeader