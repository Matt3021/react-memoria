import { useEffect, useState } from 'react'
import './App.css'
import Logo from './assets/devmemory_logo.png'
import { Button } from './components/Button'
import { InfoItem } from './components/InfoItem'
import RestartIcon from './svgs/restart.svg'
import { GridItemType } from './types/GridItemType'

export const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  const resetAndCreateGrid = () => {

  }

  return (
    <div className='container w-screen max-w-3xl m-auto flex py-14 max-[750px]:flex-col'>
      <div className='info flex flex-col w-auto max-[750px]:mb-12 max-[750px]:items-center'>
        <a href="" className='block'>
          <div className='logo'>
            <img src={Logo} width="200" alt="" />
          </div>
        </a>

        <div className='info-area w-max my-3 max-[750px]:flex max-[750px]:justify-around max-[750px]:text-center'>
          <InfoItem label='Tempo' value='00:00' />
          <InfoItem label='Movimentos' value='0'/>
        </div>

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </div>
      <div className='grid-area flex-1 flex justify-end max-[750px]:justify-center max-[750px]:mx-5'>
        <div className='grid grid-cols-4 gap-3 w-[430px]'></div>
      </div>
    </div>
  )
}