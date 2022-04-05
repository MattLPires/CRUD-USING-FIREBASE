import "./login.scss"
import { useState } from "react";

const Login = () => {

  const [error, setError] = useState(false);
  return (
    <div className="login">
      <form>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
        {error && <span>Email ou Senha incorretos!</span>}
      </form>
    </div>
  )
}

export default Login