import { useMediaQuery } from 'react-responsive';
import Home from './components/Home';
import Chat from './components/chat-with-user/Chat';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/profile';
import Signin from './components/signin';
import useTypedSelector from './hooks/useAppSelector';
import StartIntro from './components/start-intro/StartIntro';
import SecuredRoute from './components/SecuredRoute';
import NotFound from './components/404';

const App: React.FC = () => {
  const desktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const tablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { secondaryContent } = useTypedSelector(({ ui }) => ui);
  return (
    <Routes>
      <Route path='/' element={<SecuredRoute />}>
        <Route
          index
          element={
            desktop ? (
              <div className='flex'>
                <Home />
                {secondaryContent ? (
                  <>
                    <Chat />
                    {secondaryContent !== 'Chat' && <Profile />}
                  </>
                ) : (
                  <StartIntro />
                )}
              </div>
            ) : tablet ? (
              <div className='flex'>
                <Home />
                {secondaryContent ? (
                  secondaryContent === 'Chat' ? (
                    <Chat />
                  ) : (
                    <Profile />
                  )
                ) : (
                  <StartIntro />
                )}
              </div>
            ) : (
              <>
                {secondaryContent ? (
                  secondaryContent === 'Chat' ? (
                    <Chat />
                  ) : (
                    <Profile />
                  )
                ) : (
                  <Home />
                )}
              </>
            )
          }
        />
      </Route>
      <Route path='/signin' element={<Signin />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default App;