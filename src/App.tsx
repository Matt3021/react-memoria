import './App.css'
import Logo from './assets/devmemory_logo.png'

export const App = () => {
  return (
    <div className='container w-screen max-w-3xl m-auto flex py-14 max-[750px]:flex-col'>
      <div className='info flex flex-col w-auto max-[750px]:mb-12 max-[750px]:items-center'>
        <a href="" className='block'>
          <div className='logo'>
            <img src={Logo} width="200" alt="" />
          </div>
        </a>

        <div className='info-area w-max my-3 max-[750px]:flex max-[750px]:justify-around max-[750px]:text-center'>
          ...
        </div>

        <button>Reiniciar</button>
      </div>
      <div className='grid-area flex-1 flex justify-end max-[750px]:justify-center max-[750px]:mx-5'>
        ...
      </div>
    </div>
  )
}