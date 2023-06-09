import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    imageUrl: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    allCardsCreated: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validation();
      },
    );
  };

  validation = () => {
    const maxValueAttr = 90;
    const maxAttrAllSum = 210;
    const {
      cardName,
      cardDescription,
      imageUrl,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const validationArr = [
      cardName.length > 0,
      cardDescription.length > 0,
      imageUrl.length > 0,
      cardRare.length > 0,
      parseInt(cardAttr1, 10) <= maxValueAttr,
      parseInt(cardAttr1, 10) >= 0,
      parseInt(cardAttr2, 10) <= maxValueAttr,
      parseInt(cardAttr2, 10) >= 0,
      parseInt(cardAttr3, 10) <= maxValueAttr,
      parseInt(cardAttr3, 10) >= 0,
      (parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10)) <= maxAttrAllSum,
    ].every((item) => item === true);
    this.setState({
      isSaveButtonDisabled: !validationArr,
    });
  }

  createdCard = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      imageUrl,
      cardRare,
      cardTrunfo,
    } = this.state;
    const cardCreated = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      imageUrl,
      cardRare,
      cardTrunfo };
    this.setState((prevState) => (
      { allCardsCreated: [...prevState.allCardsCreated, cardCreated] }
    ));
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.createdCard();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      imageUrl: '',
      cardRare: 'normal',
    }, () => {
      const { cardTrunfo } = this.state;
      if (cardTrunfo) {
        this.setState({
          hasTrunfo: true,
        });
      }
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      imageUrl,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      allCardsCreated,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ imageUrl }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ imageUrl }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          allCardsCreated.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.imageUrl }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
