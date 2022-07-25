import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName="name"
          cardDescription="description"
          cardAttr1="Attr1"
          cardAttr2="Attr2"
          cardAttr3="Attr3"
          cardImage="imageUrl"
          cardRare="rarity"
          cardTrunfo="supercheck"
          hasTrunfo="hasTrunfo"
          isSaveButtonDisabled="buttonDisable"
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
