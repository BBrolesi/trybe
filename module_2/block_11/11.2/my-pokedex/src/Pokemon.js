import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight,
      image,
      moreInfo,
    } = this.props.pokemon;
    return (
      <div className="Pokemon-card">
        <div className="Pokemon-attributes">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average Weight: {averageWeight.value}{" "}
            {averageWeight.measurementUnit}
          </p>
        </div>
        <div className='Podex-pokemon-picutre'>
          <img src={image}></img>
        </div>
      </div>
    );
  }
}

export default Pokemon;
