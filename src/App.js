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

    }
    chooseCategory(category) {
        const current = this.state.data.filter((item) => item.Category === category);

        const activeCategory = current[0];
        const activeView = true;
        const landingView = false;

        this
        this.setState({activeCategory});
        this.setState({activeView});
        this.setState({landingView});
    }
  render() {
    return (
      <div className="App">
            <div className="App-inner">
                {this.state.landingView &&
                    <div className="category-view view">
                        <header className="App-header">
                          <h1 className="App-title">Healthy Food Generator</h1>
                        </header>
                        <div className="form-container">
                            <div className="location">
                                <img src={icon} alt="" className="location"/>
                                <address>345 Hudson St, New York, NY 10014</address>
                            </div>
                            <ul className="action-links">
                              {
                                this.state.data.map((item, index) => <li key={index}><a href="" onClick={(event) => {event.preventDefault(); this.chooseCategory(item.Category)}}>{item.Category}</a></li>)
                               }
                            </ul>
                        </div>
                    </div>
                }
                {this.state.activeView &&
                <div className="active-view view">
                    {this.state.activeCategory.items.map((item) =>

                        <div className="results-item">
                            <ul>
                                <li>
                                    <img src={item.Image} alt=""/>
                                </li>
                                <li>
                                    {item.Restaurant}
                                </li>
                                <li>
                                  <h2>{item.Menu}</h2>
                                </li>
                                <li>
                                    {item.Description}
                                </li>
                                <li>
                                    {item.Phone}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                }
            </div>
      </div>
    );
  }

}

export default App;
