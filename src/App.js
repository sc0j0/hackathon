import React, { Component } from 'react';
import icon from './icons/placeholder.svg';
import './App.css';
import data from './utils/data';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {data};
        this.state.landingView = true;

        this.chooseCategory = this.chooseCategory.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.getNewRandom = this.getNewRandom.bind(this);
        this.closeItem = this.closeItem.bind(this);

    }
    chooseCategory(category) {
        const current = this.state.data.filter((item) => item.Category === category);

        const activeCategory = current[0];
        const miscItem = activeCategory.items[Math.floor(Math.random()*activeCategory.items.length)];
        const activeView = true;
        const landingView = false;

        this.setState({activeCategory});
        this.setState({activeView});
        this.setState({landingView});
        this.setState({miscItem});
    }
    selectItem(menuItem) {
        const selected = this.state.activeCategory.items.filter((item) => item.Menu === menuItem);
        const selectedItem = selected[0];
        const activeView = false;
        const selectedView = true;

        this.setState({selectedItem});
        this.setState({selectedView});
        this.setState({activeView});
    }
    getNewRandom() {
         const miscItem = this.state.activeCategory.items[Math.floor(Math.random()*this.state.activeCategory.items.length)];

         this.setState({miscItem});
    }
    closeItem() {
        const activeView = false;
        const landingView = true;
        const selectedView = false;

        this.setState({activeView});
        this.setState({landingView});
        this.setState({selectedView});
    }
  render() {

    let styles = {};
    if (this.state.miscItem) {
        styles = {
            backgroundImage: `url(${this.state.miscItem.Image})`;
        }
    }
    return (
      <div className="App">
            <div className="App-inner">
                {this.state.landingView &&
                    <div className="category-view view">
                        <header className="App-header">
                          <h1 className="App-title">Healthy Food Generator</h1>
                        </header>
                        <div className="location">
                            <img src={icon} alt="" className="location-marker"/>
                            <address>345 Hudson St, New York, NY 10014</address>
                        </div>
                        <div className="form-container">
                            <ul className="action-links">
                              {
                                this.state.data.map((item, index) => <li key={index}><a href="" className="cta" onClick={(event) => {event.preventDefault(); this.chooseCategory(item.Category)}}>{item.Category}</a></li>)
                               }
                            </ul>
                        </div>
                    </div>
                }
                {this.state.activeView &&
                <div className="active-view view">
                    <div className="results-item">
                        <ul>
                            <li className="hero">
                                <div className="image" style={styles}></div>
                                <span className="close" onClick={this.closeItem}>x</span>
                                <div className="restaurant">{this.state.miscItem.Restaurant}</div>
                            </li>
                            <li className="heading">
                                <span className="eyebrow">{this.state.activeCategory.Category}</span>
                                <a href="#" onClick={(event)=>{event.preventDefault(); this.getNewRandom();}}>Next</a>
                            </li>
                            <li>
                              <h2>{this.state.miscItem.Menu}</h2>
                            </li>
                            <li className="description">
                                {this.state.miscItem.Description}
                            </li>
                            <li className="telephone">
                                {this.state.miscItem.Phone}
                            </li>
                             <li className="website">
                                <a href={this.state.miscItem.Website} target="_blank">{this.state.miscItem.Website}</a>
                            </li>
                        </ul>
                        <button className="cta" onClick={() => {this.selectItem(this.state.miscItem.Menu)}}>Select Order</button>
                    </div>

                </div>
                }
                {this.state.selectedView &&
                <div className="selected-view view">
                    <div className="selectedItem">
                        <header>
                            <h2>Place Your Order</h2>
                            <address>345 Hudson Street, New York, NY 10014</address>
                            <span className="close" onClick={this.closeItem}>x</span>
                        </header>
                         <div className="image" style={styles}></div>
                        <div className="copy">
                            <ul>
                                <li className="restaurant">{this.state.selectedItem.Restaurant}</li>
                                <li>{this.state.selectedItem.Menu}</li>
                                <li>$12</li>
                            </ul>

                        </div>
                        <a className="cta" href={this.state.selectedItem.Website} target="_blank">Confirm Order</a>
                    </div>
                </div>
                }
            </div>
      </div>
    );
  }

}

export default App;
