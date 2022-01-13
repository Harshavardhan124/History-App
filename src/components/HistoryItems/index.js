import {Component} from 'react'
import './index.css'

class HistoryItems extends Component {
  render() {
    const {historyDetails, deleteItem} = this.props

    const onDelete = () => {
      deleteItem(historyDetails.id)
    }

    return (
      <li className="history-item">
        <div className="timeLogo-container">
          <p className="time">{historyDetails.timeAccessed}</p>
          <img
            src={historyDetails.logoUrl}
            className="logo"
            alt="domain logo"
          />
          <p className="title-para">{historyDetails.title}</p>
          <p className="url-para">{historyDetails.domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </li>
    )
  }
}

export default HistoryItems
