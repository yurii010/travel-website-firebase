import { MainRouter } from './components/MainRouter';
import { Footer } from './components/Footer';
import { AuthProvider } from './providers/AuthProvider';
import { FirebaseProvider } from './providers/FirebaseProvider';

export const App = () => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <MainRouter />
        <Footer />
      </AuthProvider>
    </FirebaseProvider>
  );
};

export default App;
