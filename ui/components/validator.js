import React from 'react'

export default class Validator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        {
          value: 'rankine',
          text: 'Rankine',
        },
        {
          value: 'celsius',
          text: 'Celsius',
        },
        {
          value: 'fahrenheit',
          text: 'Fahrenheit',
        },
        {
          value: 'litres',
          text: 'Litres',
        },
        {
          value: 'tablespoons',
          text: 'Tablespoons',
        },
        {
          value: 'cubic-inches',
          text: 'Cubic Inches',
        },
        {
          value: 'cups',
          text: 'Cups',
        },
        {
          value: 'cubic-feet',
          text: 'Cubic Feet',
        },
        {
          value: 'gallons',
          text: 'Gallons',
        },
      ],
      optionsTarget: [],
    }
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor='nummericalValue'>Input Numerical Value</label>
          <input className='form-control' type='text' id='numericalValue' />
          <label htmlFor='unitOfMeasure'>Input Unit of Measure</label>
          <select
            className='form-control'
            defaultValue='default'
            onChange={() => alert('hello')}
          >
            <option value='default' disabled>
              Please select
            </option>
            {this.state.options.map((option, key) => {
              return (
                <option key={key} value={option.value}>
                  {option.text}
                </option>
              )
            })}
          </select>
          <label htmlFor='targetOfMeasure'>Target Unit of Measure</label>
          <select className='form-control' defaultValue='default'>
            <option value='default'>Please Select</option>
          </select>
        </form>
      </div>
    )
  }
}
