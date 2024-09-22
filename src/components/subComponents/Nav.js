import '../../PageStyles/Nav.css'

const Nav = () => {
  const handleLoginToggle = () => {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.style.display = 'block';
    console.log('it works')
  }
  const handleSignUpToggle = () => {
    console.log('Hey its working')
  }

  return (
    <div className='main'>
      <nav>
        <div className="wrap">
          <h2 className="main-head">HiveHub</h2>
          <div className="links">
            <span className="link signup-link logged-out" onClick={handleSignUpToggle}>SignUp</span>
            <span className="link login-link logged-out" onClick={handleLoginToggle}>Login</span>
          </div>
        </div>
      </nav>
      <form className="login-container">
        <input type="email" id="email" placeholder="Email Address" /><br />
        <input type="password" id="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
      <form className="signup-container">
        <input type="email" id="email" placeholder="Enter a Email Address" /><br />
        <input type="password" id="password" placeholder="Create a Password" /><br />
        <button type="submit">SignUp</button>
      </form>
    </div>


  )
}

export default Nav;
