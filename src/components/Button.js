import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  static contextType = LanguageContext;
  // this is how to hook up a context object to a class component
  // static adds a property to the class itself
  // Button.contextType = LanguageContext
  render () {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    return (
      <button className="ui button primary">{text}</button>
    )
  };
};

export default Button;
