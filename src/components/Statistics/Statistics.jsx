import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const iconSize = 28;
  const icons = [
    <FaRegThumbsUp size={iconSize} />,
    <MdPeople size={iconSize} />,
    <MdOutlineProductionQuantityLimits size={iconSize} />,
    <GiTreeDoor size={iconSize} />,
  ];
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, total, title }, index) => (
          <li key={id} className={style.item}>
            <StatisticsItem total={total} title={title} icon={icons[index]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
