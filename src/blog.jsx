import React from 'react';
import Article from "./Article";
// import { render } from 'react-dom';

class blog extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Article />
      </div>
    )
  }
}

export default blog