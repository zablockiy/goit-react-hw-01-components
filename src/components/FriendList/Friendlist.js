import PropTypes from 'prop-types';
import { FriendItem} from './FriendItem';
import style from './friendlist.module.css';


export const FriendList =({friends})=>{
  return (
    <ul className={style.friendList}>
      {friends.map(({id,avatar, name, isOnline})=>
      <FriendItem key={id} name={name} isOnline={isOnline} avatar={avatar} />
      )}
    </ul>

  )
}

FriendList.propTypes ={
  friends: PropTypes.arrayOf((PropTypes.shape(
    {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }
  )))
}
