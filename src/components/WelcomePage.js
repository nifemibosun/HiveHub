import Nav from "./subComponents/Nav"
import '../PageStyles/WelcomePage.css'

const WelcomePage = () => {
  return (
    <>
        <Nav />
        <h3 className="welcome-message">Login/SignUp to HiveHub to connect with different people around the world.</h3>
    </>
  )
}


export default WelcomePage;