import PropTypes from 'prop-types';
import style from './frienditem.module.css';

export const FriendItem = ({avatar,name,isOnline})=> {
  return (
    <li className={style.item}>
      <span className={`${style.status} ${isOnline ? style.isOnline : style.isOffline}`}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>

  )
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
