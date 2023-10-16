import {Component} from 'react'

import CountriesList from './CountriesList'
import VisitedCountries from './VisitedCountries'

import './App.css'

//   This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here

class App extends Component {
  state = {
    countriesList: initialCountriesList,
  }

  countryVisited = name => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.name === name) {
          return {...each, isVisited: true}
        }
        return each
      }),
    }))
  }

  removeCountry = name => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.name === name) {
          return {...each, isVisited: false}
        }
        return each
      }),
    }))
  }

  render() {
    const {countriesList} = this.state
    const filteredItems = countriesList.filter(each => each.isVisited === true)

    return (
      <div className="app-container">
        <div className="countries-list-container">
          <h1 className="countries-heading"> Countries </h1>
          <ul className="list-item-main-container">
            {countriesList.map(each => (
              <CountriesList
                key={each.id}
                item={each}
                countryVisited={this.countryVisited}
              />
            ))}
          </ul>
        </div>

        <div className="visited-countries-main-container">
          <h1 className="visited-country"> Visited Countries </h1>
          {filteredItems.length > 0 ? (
            <ul className="visited-countries-container">
              {filteredItems.map(each => (
                <VisitedCountries
                  key={each.id}
                  removeCountry={this.removeCountry}
                  item={each}
                />
              ))}
            </ul>
          ) : (
            <p className="no-countries-visited"> No Countries Visited Yet! </p>
          )}
        </div>
      </div>
    )
  }
}

export default App
