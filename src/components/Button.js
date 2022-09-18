import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Vorleggen'
  }
  // static contextType = LanguageContext;
  // this is how to hook up a context object to a class component
  // static adds a property to the class itself
  // Button.contextType = LanguageContext
  render () {
    return (
      <button className="ui button primary">
      {/* consumer always gets one child/consumer */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value) }
        </LanguageContext.Consumer>
      </button>
    )
  };
};

export default Button;
