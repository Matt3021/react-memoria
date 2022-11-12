import { useEffect, useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';

import Logo from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items'
import { formatTimeElapsed } from './helpers/formatTimeElapsed';


export const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer)
  }, [playing, timeElapsed])

  // verify if opened are equal
  useEffect(() => {
    if (showCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if (opened.length === 2) {

        if (opened[0].item === opened[1].item) {
          // v1 - if both are equal, make every "shown" permanent
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false
            }
          }

          setGridItems(tmpGrid);
          setShowCount(0);
        } else {
          // v2 - if they are NOT equal, close all "shown"
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }

            setGridItems(tmpGrid);
            setShowCount(0);
          }, 1000)
        }

        setMoveCount(moveCount => moveCount + 1)
      }
    }
  }, [showCount, gridItems])

  //verify if game is over
  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false)
    }
  }, [moveCount, gridItems])

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

  const handleItemClick = (index: number) => {
    if (playing && index !== null && showCount < 2) {
      let tmpGrid = [...gridItems];
      
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShowCount(showCount + 1)
      }

      setGridItems(tmpGrid);
    }
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
          <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label='Movimentos' value={moveCount.toString()}/>
        </div>

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </div>
      <div className='grid-area flex-1 flex justify-end max-[750px]:justify-center max-[750px]:mx-5'>
        <div className='grid grid-cols-4 gap-3 w-[430px] max-[750px]:grid-cols-3'>
          {gridItems.map((item, index) => (
            <GridItem 
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}