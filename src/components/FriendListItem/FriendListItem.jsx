import s from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}>
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
