import { node } from "prop-types"

function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}

Tabs.propTypes = {
  children: node,
  buttons: node,
  buttonsContainer: node
}

export default Tabs
