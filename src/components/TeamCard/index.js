// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'
class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, teamImageUrl, id} = teamData
    return (
      <li className="team-card">
        <Link to={`/team-matches/${id}`} className="link-item">
          <img className="team-card-image" src={teamImageUrl} alt={`${name}`} />
          <p className="team-card-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
