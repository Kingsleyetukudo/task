export default function Login() {
  return (
    <div className="form-col">
      <div className="form-holder">
        <h2>Login.</h2>
        <form className="form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>Forget Password?</p>
          <button type="submit" className="form-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
