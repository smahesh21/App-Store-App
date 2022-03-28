import './index.css'

const TabItem = props => {
  const {eachTab, isActive, clickOnTab} = props
  const {displayText, tabId} = eachTab
  const onClickTabButton = () => {
    clickOnTab(tabId)
  }
  const activeStyling = isActive ? 'active-styling-button' : ''
  return (
    <li className="tabs-list">
      <button
        type="button"
        className={`display-text ${activeStyling}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
