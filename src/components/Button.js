import React from 'react';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Vorleggen'
  }
  // static contextType = LanguageContext;
  // this is how to hook up a context object to a class component
  // static adds a property to the class itself
  // Button.contextType = LanguageContext
  renderButton(color) {
    return (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {(value) => this.renderSubmit(value) }
      </LanguageContext.Consumer>
    </button>
    )
  }

  render () {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  };
};

export default Button;
