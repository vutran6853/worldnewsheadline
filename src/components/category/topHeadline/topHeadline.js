import React, { Component } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

const category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : category.filter(category =>
    category.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

class TopHeadline extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      country: [ '', 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'],
      userInput: '',
      selectCountry: '',
      value: '',
      suggestions: []
     }
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  handleCategory = (value) => {
    let { category } = this.state;
    console.log(`value ${ value }`)
    console.log()
    // this.setState({ userInput: value });
  }

  handleSelectCountry = (value) => {
    // console.log(`value ${ value }`)
    this.setState({ selectCountry: value });
  }

  handleSubmit = () => {
    let { selectCountry, userInput, value } = this.state;
    console.log(`selectCountry ${ selectCountry }`)
    console.log(`userInput ${ userInput }`)
    console.log(`value ${ value }`)

    if(selectCountry !== '') {
      console.log('selectCountry',true)
    } else {
       console.log('please select your Country')
    }

    if(value !== '') {
      console.log('userInput',true)
    } else {
       console.log('please enter something')
    }

    axios.post('/api/getTopHeadlineByCountry', { country: selectCountry, category: value })
    .then((response) => {
      console.log(response.data)
    })


  }

  render() {
    let { country } = this.state;
    const { value, suggestions } = this.state;

    let displayCountry = country.map((value, index) => {
      // console.log(value, index)
      return(
          <option value={ value }>{ value }</option>
      )
    });

    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        TopHeadline
        <br/>
          <select onChange={ (e) => this.handleSelectCountry(e.target.value) }>
            { displayCountry }
          </select>

        <Autosuggest suggestions={ suggestions }
                     onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested }
                     onSuggestionsClearRequested={ this.onSuggestionsClearRequested }
                     getSuggestionValue={ getSuggestionValue }
                     renderSuggestion={ renderSuggestion }
                     inputProps={ inputProps }
        />
        <button onClick={ () => this.handleSubmit() }>Search</button>

        {/* <input onChange={ (e) => this.handleCategory(e.target.value)} placeholder='Enter '></input> */}

      </div>
    );
  }
}

export default TopHeadline;