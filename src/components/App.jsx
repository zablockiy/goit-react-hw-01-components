import { Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/Friendlist';
import { TransactionHistory} from './TransactionHistory/Transaction';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import items from '../json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats} />
      <Statistics title = 'Upload stats' stats = {data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
      </>
  )
}
