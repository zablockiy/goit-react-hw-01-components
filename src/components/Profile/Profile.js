import PropTypes from 'prop-types';
import style from './profile.module.css';




export const Profile = (props)=> {
 return  (<div className={style.profile}>
    <div className={style.description}>
      <img
        src={props.avatar}
        alt="User avatar"
        className={style.avatar}
      />
      <p className={style.name}>{props.username}</p>
      <p className={style.tag}>@{props.tag}</p>
      <p className={style.location}>{props.location}</p>
    </div>

    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{props.stats.followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{props.stats.views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>);
};

Profile.propTypes ={
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape (
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    },
  )


}


