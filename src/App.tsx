import './App.css'
import Logo from './assets/devmemory_logo.png'

export const App = () => {
  return (
    <div className='container'>
      <div className='info'>
        <a href="">
          <div className='logo'>
            <img src={Logo} width="200" alt="" />
          </div>
        </a>

        <div className='info-area'>
          ...
        </div>

        <button>Reiniciar</button>
      </div>
      <div className='grid-area'>
        ...
      </div>
    </div>
  )
}