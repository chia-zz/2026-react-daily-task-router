import './App.css';
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
  useNavigate,
  Outlet,
  useParams,
  Link,
} from 'react-router-dom';

const Homepage = () => {
  return <p>這是首頁</p>;
};
const Todo = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <>
      <p>這是 Todo 頁面</p>
      <button type='button' onClick={handleLogout}>
        登出
      </button>
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Post = () => {
  return (
    <div>
      <h3>Post 頁面</h3>
      <Link to='/post/post123'>
        <button type='button'>前往詳細頁面</button>
      </Link>
      <Outlet />
    </div>
  );
};
const PostId = () => {
  let params = useParams();
  return (
    <>
      <p>PostID: {params.postId}</p>
      <Link to='/post'>
        <button type='button'>回上一頁</button>
      </Link>
    </>
  );
};

function App() {
  return (
    <div className='container'>
      <HashRouter>
        <div className='nav-link'>
          <NavLink to='/'>
            <p>回到首頁</p>
          </NavLink>
          <NavLink to='/register'>
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to='/login'>
            <p>登入頁面</p>
          </NavLink>
          <NavLink to='/todo'>
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to='/post'>
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/post' element={<Post />}>
            <Route path=':postId' element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
