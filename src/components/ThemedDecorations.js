import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ThemedDecorations extends React.Component {
  render() {
    let childrenWithClass = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    })
    return (
      <div>
        {childrenWithClass}
        </div>
    )
  }
}

export default ThemedDecorations;
