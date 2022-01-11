import Header from "./Header";
import "./header.css";
import Groups from "./Groups";
import groups from './groups.css'
import Feed from "./Feed";
import {useStateValue} from './StateProvider'
import Login from "./Login";
import login from './login.css'
import posts from './Post.css'
import stories from './stories.css'


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      { !user ? (<Login />) : (
        <>
          <Header />

          <div className = "app__body">
            <Groups />
    
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;