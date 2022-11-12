import '../App.css';
import { GridItemType } from '../types/GridItemType';
import b7Svg from '../svgs/b7.svg'
import { items } from '../data/items';


interface GridItemProps {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({ item, onClick }: GridItemProps) => {
  return (
    <div 
      className={item.permanentShown || item.shown ? "bg-[#1550FF] w-24 rounded-3xl flex justify-center items-center cursor-pointer" : "bg-[#E2E3E3] w-24 rounded-3xl flex justify-center items-center cursor-pointer opacity-10"}
      onClick={onClick}
    >
      {item.permanentShown === false && item.shown === false &&
        <img src={b7Svg} className="icon w-10 h-10" />
      }
      {(item.permanentShown || item.shown) && item.item !== null &&
         <img src={items[item.item].icon} className="icon w-10 h-10" />
      }
    </div>
  )
};