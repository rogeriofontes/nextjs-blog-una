import Header from '../components/Header';
import Navbar from '../components/Navbar';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <footer>
        <p>&copy; 2022 My Application</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;