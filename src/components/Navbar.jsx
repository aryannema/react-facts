import reactLogo from "../assets/react-logo.png";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={reactLogo} alt="React logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}

export default Navbar;
