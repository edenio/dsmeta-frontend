import logo from '../../assets/img/logo.svg'
import './styles.css'


function Header() {
 
    return( 

        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por Edenio Oliveira Durante a Semana Spring React
              <a href="https://about.me/edenio">Sobre Edenio Oliveira</a>
            </p>
        </div>
    </header>
    
    )
  
  }
  
  export default Header

