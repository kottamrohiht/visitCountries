import './index.css'

const VisitedCountries = props => {
  const {item, removeCountry} = props
  const {imageUrl, name} = item

  const onClickRemoveButton = () => {
    removeCountry(name)
  }

  return (
    <li className="visited-container">
      <img src={imageUrl} alt=" thumbnail" className="country-img" />
      <div className="name-remove-button">
        <p className="name"> {name} </p>
        <button onClick={onClickRemoveButton} type="button" className="remove">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
