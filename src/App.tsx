import { useEffect, useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';

import Logo from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items'


export const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  const resetAndCreateGrid = () => {
    // step 1 - reset the game
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);

    // step 2 - create the grid
    // step 2.1 - create a grid empty
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) tmpGrid.push({
        item: null, shown: false, permanentShown: false
      });
    // step 2.2 - fill the grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < (items.length); i++) {
        let pos = -1
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i
      };
    };

    // step 2.3 - put on state
    setGridItems(tmpGrid);

    //step 3 - start the game
    setPlaying(true);
  }

  const handleItemClick = () => {

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
        <div className='grid grid-cols-4 gap-3 w-[430px]'>
          {gridItems.map((item, index) => (
            <GridItem 
              key={index}
              item={item}
              onClick={() => handleItemClick()}
            />
          ))}
        </div>
      </div>
    </div>
  )
}