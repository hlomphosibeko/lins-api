import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import RegisterForm from './pages/auth/RegisterForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/login" render={() => <h1>Log In</h1>} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route render={() => <p>Page not found!</p>} /> 
        </Switch>
        
        

      </Container>
    </div>
  );
}

export default App;