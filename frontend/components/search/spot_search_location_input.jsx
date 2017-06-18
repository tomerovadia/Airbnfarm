import React from 'react';
import Autocomplete from 'react-autocomplete';

function fakeRequest(value, cb) {
  setTimeout(cb, 500, value ?
    getStates().filter(state => matchStateToTerm(state, value)) :
    getStates()
  )
}

let styles = {
  item: {
    padding: '10px 6px',
    cursor: 'default',
    'font-size': '19px',
  },

  highlightedItem: {
    color: 'white',
    background: '#FF5A5F',
    padding: '10px 6px',
    cursor: 'default',
    'font-size': '19px',
  },

  menu: {
    'border': 'solid 1px #ccc',
    'border-radius': '3px',
    'box-shadow': '1px 1px #ccc',
  }
}

function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

function getStates() {
  return [
    {id: 1, name: 'Tripp, SD'},
    {id: 2, name: 'Agra, KS'},
    {id: 3, name: 'Oil Trough, AR'}
  ]
}

class SpotSearchLocationInput extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value: this.props.initialValue,
      unitedStates: getStates(),
      loading: false
    }
  }

  render() {

    return (
      <Autocomplete
        inputProps={{ id: 'states-autocomplete' }}
        ref="autocomplete"
        value={this.state.value}
        items={this.state.unitedStates}
        getItemValue={(item) => item.name}
        inputProps={{placeholder: 'Anywhere'}}
        inputStyle={{
          'font-weight': 400,
          'font-family': "Helvetica Neue",
          'font-size': '14px',
          'color': '#575757',
          'letter-spacing': '1px',
        }}
        wrapperStyle={{
          display: 'block',
        }}
        onSelect={(value, item) => {
          // set the menu to only the selected item
          // this.setState({ value, unitedStates: [ item ] })
          this.props.handleCityChange(value, true);
          // or you could reset it to a default list again
          this.setState({unitedStates: getStates() })
        }}
        onChange={(event, value) => {
          this.setState({ value, loading: true })
          this.props.handleCityChange(value, false);
          fakeRequest(value, (items) => {
            this.setState({ unitedStates: items, loading: false })
          })
        }}
        renderItem={(item, isHighlighted) => (
          <div
            style={isHighlighted ? styles.highlightedItem : styles.item}
            key={item.id}
            id={item.id}
          >{item.name}</div>
        )}
      />
    )
  }


}

export default SpotSearchLocationInput;
