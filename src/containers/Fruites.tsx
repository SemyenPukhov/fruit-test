import React, { Component } from "react";
import { State, UserData } from "../reducers/fruitReducer";
import apiGet from "../api";
import BarPlot from "../components/BarPlot";

import { connect } from "react-redux";

class Fruits extends Component<any> {
  state = { selected: "", favorites: [] };
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.apiGet();
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    this.countFruits(this.props.users);
  }

  countFruits = (users: UserData[]) => {
    const result: any = {};
    users.forEach((user: UserData) => {
      const key = user.favoriteFruit;
      if (result[key] === undefined) {
        result[key] = 1;
      } else {
        result[key]++;
      }
    });
    return result;
  };

  displayBarPlots = (users: any) => {
    let results = this.countFruits(users); //count fruits
    const favorites = this.props.favorites;
    if (favorites.length) {
      favorites.forEach((key: string) => {
        if (results[key]) {
          results[key]++;
        } else {
          results[key] = 1;
        }
      });
    }
    const sorted = Object.keys(results).sort(function(a, b) {
      if (favorites.includes(a)) {
        return -100;
      }
      if (favorites.includes(b)) {
        return -100;
      }
      return results[b] - results[a];
    });

    return sorted.map((fruitName: string, i: number) => (
      <BarPlot
        key={i}
        fruitName={fruitName}
        total={results[fruitName]}
        onBarClick={this.onBarClick(fruitName)}
        selected={this.state.selected}
      />
    ));
  };

  onBarClick = (fruitName: string) => () => {
    this.setState({ selected: fruitName });
  };

  render() {
    const { users } = this.props;
    const allFruits = this.props.users.map(
      (user: UserData) => user.favoriteFruit
    );
    return (
      <div className="fruits-wrapper">
        <h2>Fruites </h2>
        <div className="plots">{this.displayBarPlots(users)}</div>
        {this.state.selected ? (
          <h3>People who picked {this.state.selected}</h3>
        ) : (
          ""
        )}
        <div className="list">
          {users.map((user: UserData, i: number) => {
            if (user.favoriteFruit === this.state.selected)
              return (
                <div key={i} className="user">
                  {user.name}
                </div>
              );
          })}{" "}
          {this.props.favorites.map((fruit: string, i: number) => {
            if (!allFruits.includes(fruit) && this.state.selected === fruit) {
              return (
                <div key={i} className="user">
                  Super User
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  users: state.users,
  favorites: state.checked
});

export default connect(
  mapStateToProps,
  { apiGet }
)(Fruits);
