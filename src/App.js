import {Component} from 'react'
import './App.css'
import HistoryItems from './components/HistoryItems'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  keyPressed = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput),
    )
    let reqElement
    if (searchResults.length !== 0) {
      reqElement = (
        <div className="bottom-container">
          <div className="bottom-list-container">
            <ul className="items-container">
              {searchResults.map(eachItem => (
                <HistoryItems
                  historyDetails={eachItem}
                  deleteItem={this.deleteItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      reqElement = (
        <div className="empty-bottom-container">
          <p className="empty-para">There is no history to show</p>
        </div>
      )
    }
    return (
      <div>
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              onChange={this.keyPressed}
              value={searchInput}
              className="search-element"
              placeholder="Search history"
            />
          </div>
        </div>
        {reqElement}
      </div>
    )
  }
}

export default App
