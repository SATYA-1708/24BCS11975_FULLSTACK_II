import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        display: "flex",
        gap: "25px",
      }}
    >
      <Link to="/" style={{color:"white",textDecoration:"none"}}>
         Home
      </Link>

      <Link to="/about" style={{color:"white",textDecoration:"none"}}>
         About
      </Link>

      <Link to="/contact" style={{color:"white",textDecoration:"none"}}>
         Contact
      </Link>

      <Link
        to="/dashboard"
        style={{color:"white",textDecoration:"none"}}
      >
         Dashboard
      </Link>
    </nav>
  );
}

function Home() {
  return (
    <div style={{textAlign:"center",padding:"60px"}}>
      <h1> Welcome to My Portfolio!!!</h1>
      <p>
        Thank you for seeing my portfoilo you can go now. BYE!!!
      </p>
      <br />
      <Link to="/about">
        <button>Know More About Me</button>
      </Link>

      {" "}

      <Link to="/contact">
        <button>Contact Me</button>
      </Link>
    </div>
  );
}

function About() {
  return (
    <div style={{padding:"50px",textAlign:"center"}}>
      <h1> About Me</h1>

      <p>
       Hiii! 
       My Name is Rama. I am student at Chandigarh university Currently studying 3rd year CSE.
      </p>

      <p>
        I like to create projects even if i dont know anything.(like this) Nothing More to know about Me.
      </p>
    </div>
  );
}

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1> Contact Me</h1>

      <p>you can contact me from here by submitting the form i will get back to you</p>

      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="text"
          placeholder="Your Name"
         
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Your Email"
         
        />

        <br />
        <br />

        <textarea
          placeholder="Enter your message"
        />

        <br />
        <br />

        <button type="submit">
           Send Message
        </button>
      </form>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1> Dashboard</h1>

      <p>This is your portfolio dashboard.</p>

      <hr />

      <nav>
        <Link to="/dashboard/profile">
           Profile
        </Link>

        {" | "}

        <Link to="/dashboard/settings">
           Settings
        </Link>
      </nav>

      <br />

      <Outlet />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2> Profile Page</h2>

      <p>
        This is the profile page 
      </p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2> Settings Page</h2>

      <p>
       This is the settings page
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;