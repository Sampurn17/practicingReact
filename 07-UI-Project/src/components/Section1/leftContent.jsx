import { ArrowUpRight} from 'lucide-react';
import HeroText from './HeroText';
import Arrow from './Arrow';
const leftContent = () => {
  return (
    <div className='ml-10 h-[75vh] flex flex-col justify-between w-3/12'>
        <HeroText />
        <Arrow />

    </div>
  )
}

export default leftContent