// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="li">
      <div className="social-card">
        <img className="social-icon" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
