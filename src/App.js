import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const BoxColors = (state) => {
    const backgroundColor = state.divBackgroundColor;
    return (
       <div style={{
                    border: '1px',
                    borderColor: 'white',
                    height: '150px',
                    width: '150px',
                    backgroundColor
                  }}>
       </div>
    );
};

BoxColors.propTypes = {
    key: PropTypes.number,
    backgroundColor: PropTypes.string
};


class App extends Component {
  
  constructor(props) {
    super(props);
    let divColors = () => {
       let arrReturn = [];
       for (let i = 1; i < 33; i++){
         arrReturn.push(this.props.allColors[Math.floor(Math.random() * this.props.allColors.length)]);
       }
       return arrReturn;
    };
    this.state = {
        divBackgroundColor: divColors()
    };
    
    setInterval(() => {
      const randBox = Math.floor(Math.random() * this.state.divBackgroundColor.length);
      const newState = () => this.state.divBackgroundColor.map((color, idx) => {
        if (idx === randBox) {
          color = this.props.allColors[Math.floor(Math.random() * this.props.allColors.length)];
        }
        return color;
      });
      this.setState({divBackgroundColor: newState()});
    }, 300);  
    
  }
  
  render() {
    const boxColor = this.state.divBackgroundColor.map((color, index) =>(
       <BoxColors
          key={index}
          divBackgroundColor={color}
       />
    ));
    return (
      <div className="App">
         {boxColor}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;