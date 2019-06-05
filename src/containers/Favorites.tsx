import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import { connect } from "react-redux";
import { AppActionTypes, State } from "../reducers/fruitReducer";

let state = {
  checkboxes: [
    { value: "blackberries", checked: false },
    { value: "apple", checked: false },
    { value: "orange", checked: false },
    { value: "banana", checked: false },
    { value: "pear", checked: false },
    { value: "watermelon", checked: false },
    { value: "cherries", checked: false },
    { value: "mango", checked: false },
    { value: "grapes", checked: false },
    { value: "cantaloupe", checked: false },
    { value: "strawberries", checked: false },
    { value: "kiwi", checked: false },
    { value: "pineapple", checked: false },
    { value: "pomegranate", checked: false }
  ]
};

class Favorites extends Component<any> {
  state = state;

  componentWillUnmount() {
    state = this.state;
  }

  onChange = (key: string) => () => {
    this.setState(
      {
        checkboxes: this.state.checkboxes.map(checkbox =>
          checkbox.value === key
            ? { ...checkbox, checked: !checkbox.checked }
            : checkbox
        )
      },
      () => {
        const checked = this.state.checkboxes
          .filter(({ checked }) => checked)
          .map(({ value }) => value);
        this.props.dispatch({
          type: AppActionTypes.UPDATE_FAVORITES,
          payload: checked
        });
      }
    );
  };

  render() {
    return (
      <div className="favorites-wrapper">
        {this.state.checkboxes.map((item, i) => (
          <label key={i}>
            {item.value}
            <Checkbox
              name={item.value}
              checked={item.checked}
              onChange={this.onChange(item.value)}
            />
          </label>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  checkboxes: state.checked
});

export default connect(mapStateToProps)(Favorites);
