import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './Components/Main';
function App() {
  return (
    <div>
      {/* navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-light shadow-sm py-3  */}
        <nav className="navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4 ms-5" href="#">
                    PRAKTIKUM 1
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <div className="buttons">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/bmi">BMI</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/bank">Bank</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ppn">PPN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/bilangan">Bilangan</a>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <p><Main/></p>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
