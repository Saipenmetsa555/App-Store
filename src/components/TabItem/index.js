// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, userAction} = props
  const {displayText, tabId} = eachTab

  const onClicked = () => {
    userAction(tabId)
  }

  return (
    <li className="li">
      <button onClick={onClicked} className="button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
