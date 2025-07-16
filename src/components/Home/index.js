// Write your code here

import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplTeamsList: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updateddata = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({iplTeamsList: updateddata, isLoading: false})
  }

  render() {
    const {iplTeamsList, isLoading} = this.state
    return (
      <div className="container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        <div className="teams-container">
          {isLoading ? (
            <div testid="loader" className="loader-container">
              <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <ul className="team-list-items">
              {iplTeamsList.map(team => (
                <TeamCard key={team.id} teamData={team} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
