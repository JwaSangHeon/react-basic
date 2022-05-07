import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, children, myFavoriteNumber }) => {
//   return (
//     <>
//       MyComponent, {name}
//       <br />
//       MyChildren, {children}
//       <br />
//       MyFavoriteNumber, {myFavoriteNumber}
//     </>
//   );
// };

class MyComponent extends Component {
  render() {
    const { name, children, myFavoriteNumber } = this.props;
    return (
      <>
        MyComponent, {name}
        <br />
        MyChildren, {children}
        <br />
        MyFavoriteNumber, {myFavoriteNumber}
      </>
    );
  }
}

MyComponent.defaultProps = {
  name: 'basic',
};
MyComponent.propTypes = {
  name: PropTypes.string,
  myFavoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
