import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <label htmlFor="name">
          Name
          <input
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imageUrl">
          <input
            id="imageUrl"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          <select
            id="rarity"
            type="select"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="supercheck">
          <input
            type="checkbox"
            name="trunfo-input"
            id="supercheck"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
