import { bool, func, node } from "prop-types"

function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}

TabButton.propTypes = {
  children: node,
  onSelect: func,
  isSelected: bool
}
export default TabButton
