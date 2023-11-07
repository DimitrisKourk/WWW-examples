/* 'use strict';

function ReactButton() {
  return <button>Hello from React JSX</button>;
}
const domContainer = document.querySelector('#reactContainer');
const root = ReactDOM.createRoot(domContainer);
root.render(<ReactButton />); */


'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this JSX.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#reactContainer');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));