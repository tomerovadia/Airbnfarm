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
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
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
        inputProps={{ placeholder: 'Anywhere' }}
        onSelect={(value, item) => {
          // set the menu to only the selected item
          this.setState({ value, unitedStates: [ item ] })
          this.props.handleCityChange(value);
          // or you could reset it to a default list again
          // this.setState({ unitedStates: getStates() })
        }}
        onChange={(event, value) => {
          this.setState({ value, loading: true })
          this.props.handleCityChange(value);
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
