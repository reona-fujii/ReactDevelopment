import React from 'react';
import Article from "./Article";
// import { render } from 'react-dom';

class Blog extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }

togglePublished = () => {
  this.setState({
  isPublished: !this.state.isPublished
  })
}

  render() {
    return (
      <div>
        <Article title={"React"} isPublished={this.state.isPublished} toggle={()=>{this.togglePublished()}} />
      </div>
    )
  }
}

export default Blog