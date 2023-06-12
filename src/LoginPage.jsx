import "./App.css";

function LoginPage(props) {
  return (
    <div className="mt-56 h-70">
      <div className="ml-96 w-96 h-24 bg-blue-950 text-white rounded-t-lg">
        <div className="pt-5">
          <h1 className="text-2xl">Welcome to</h1>
          <h6>Digital Palika</h6>
        </div>
      </div>
      <form className="ml-96 w-96 h-64  bg-white border border-gray-300 rounded-b-lg" onSubmit={props.hangleForm}>
        <br />
        <input
          className="mr-96z mb-2 w-80 h-10 border border-gray-500 rounded-t-lg rounded-b-lg"
          type="email"
          name="email"
          value={props.loginData}
          onChange={props.toggle}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "-3.7rem",
              left: "3.5rem",
              fontSize: "15px",
              fontWeight: 500,
              color: "#41b883",
            }}
          >
            <label className="mr-72 text-green-500 bg-white">Email</label>
          </div>
        </div>
        <br />
        <input
          className=" mr-96z mb-2 w-80 h-10 border border-gray-500 rounded-t-lg rounded-b-lg"
          type="password"
          name="password"
          value={props.loginData}
          onChange={props.toggle}
        />

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "-3.7rem",
              left: "3.5rem",
              fontSize: "15px",
              fontWeight: 500,
              color: "#41b883",
            }}
          >
            <label className="mr-72 text-green-500 bg-white">Password</label>
          </div>
        </div>
        <br />
        <input
          className="mr-1"
          id="okayToRemember"
          type="checkbox"
          name="isRemembered"
          onChange={props.toggle}
          checked={props.loginData}
        />
        <label className="mr-24">Remember me</label>
        <label><a href="#">Forgot Password?</a></label>
        <br />
        <button className="mt-3 bg-green-500 w-80 h-9 rounded-t-lg rounded-b-lg">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
