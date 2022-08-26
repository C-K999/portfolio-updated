import CK_suit from "../images/1517504613471.png";

function Header() {
  return (
    <header class="navbar fixed-top">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Clement Koo</span>
      </div>
      <aside>
        <img src={CK_suit} alt="CK_suit" />
      </aside>
    </header>
  );
}

export default Header;
