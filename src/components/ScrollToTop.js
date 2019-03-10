import React from 'react';
import { withRouter } from 'react-router-dom';

// class _ScrollToTop extends React.Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     return this.props.children;
//   }
// }

function _ScrollToTop({ location, children }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default ScrollToTop;
