import { React } from 'react';

export default function Navbar() {
      return(
       
        <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Winter Gardening</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white-50" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/open-air">Open Air</a></li>
            <li><a className="dropdown-item" href="/cold-frames">Cold Frame</a></li>
            <li><a className="dropdown-item" href='/low-tunnel'>Low Tunnel</a></li>
            <li><a className="dropdown-item" href="/high-tunnel">High Tunnel</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
       
      )
}