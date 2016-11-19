import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
        <section className="green list">
          <div className="card">
            <h3>{this.props.word}</h3>
            <form>
              <input type="text"/>
              <button type="submit">OK</button>
            </form>
          </div>
        </section>
    );
  }
}