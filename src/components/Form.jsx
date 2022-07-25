import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      // name: '',
      // email: '',
      // age: '',
      // anecdote: '',
      // terms: false,
    };
  }

  // onInputChange = ({ target }) => {
  //   const { name } = target;
  //   const value = (target.type === 'checkbox') ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    // const { name, email, age, anecdote, terms } = this.state;
    return (
      <form className="form">
        <label htmlFor="name">
          Name
          <input id="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Description
          <input id="description" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input id="attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input id="attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input id="attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="imageurl">
          <input id="imageurl" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <select id="rare" type="select" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="normal">muito raro</option>
          </select>
        </label>
        <label htmlFor="supercheck">
          <input type="checkbox" name="" id="supercheck" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
