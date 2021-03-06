import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Loading from './components/Loading';
import Landing from './pages/Landing/Landing';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const Order = React.lazy(() => import('./pages/Order/Order'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function _App({ location }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Suspense
          fallback={
            <CenterLoading>
              <Loading height="200px" width="200px" />
            </CenterLoading>
          }>
          <Switch location={location}>
            <Route exact path="/" component={Landing} key="1" />
            <Route
              path="/order"
              render={props => <Order {...props} />}
              key="2"
            />
            <Route render={props => <NotFound {...props} />} key="3" />
          </Switch>
        </Suspense>
      </>
      {/* </StripeProvider> */}
    </ThemeProvider>
  );
}

const App = withRouter(_App);
export default App;

export const CenterLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  background: ${theme.backgroundColor};
`;
