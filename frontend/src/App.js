import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import "./api/axiosDefaults";
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import HomePage from './components/HomePage';
import PostEditForm from "./pages/posts/PostEditForm";
import GetAQuote from "./pages/quotes/GetAQuote";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/posts" render={() => (
            <PostsPage message="No results found. Adjust the search keyword." />
          )} />
          <Route exact path="/testimonials" render={() => (
            <PostsPage
             message="No results found. Adjust the search keyword or follow a user."
             filter={`owner__followed__owner__profile=${profile_id}&`} />
          )} />
          <Route exact path="/liked" render={() => (
            <PostsPage
             message="No results found. Adjust the search keyword or like a post."
             filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />
          )} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />}  />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route path="/quotes" render={() => <GetAQuote />} />
          <Route render={() => <p>Page not found!</p>} /> 
        </Switch>
      </Container>
    </div>
  );  
}

export default App;