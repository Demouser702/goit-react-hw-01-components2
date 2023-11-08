import './App.css';
import Profile from './components1/Profile';
import Statistics from './components1/Statistics';
import user from './user.json';
import data from './data.json';

function App() {
  return (
    <div>
      <h1>Profil</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={data.title} stats={data.stats} />
    </div>
  );
}

export default App;
