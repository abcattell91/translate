import React from 'react';

const Context = React.createContext('english'); // default selected language or default 'value'
export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render () {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
};

export default Context;
