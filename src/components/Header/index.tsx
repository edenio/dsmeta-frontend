import logo from '../../assets/img/logo.svg'
import './styles.css'


function Header() {
 
    return( 

        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              <a href="https://github.com/edenio">Desenvolvido por Edenio Oliveira Durante a Semana Spring React</a>
            </p>
        </div>
    </header>
    
    )
  
  }
  
  export default Header

