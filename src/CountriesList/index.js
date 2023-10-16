import './index.css'

const CountriesList = props => {
  const {item, countryVisited} = props
  const {name, isVisited} = item

  const onClickVisit = () => {
    countryVisited(name)
  }

  const buttonCss = isVisited ? 'visited' : 'not-visited'
  const buttonTxt = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="list-container">
      <div className="country-name-container">
        <p className="country-name"> {name} </p>
        {isVisited ? (
          <p className="visited"> Visited </p>
        ) : (
          <button onClick={onClickVisit} type="button" className={buttonCss}>
            Visit
          </button>
        )}
      </div>
      <hr className="line" />
    </li>
  )
}

export default CountriesList
