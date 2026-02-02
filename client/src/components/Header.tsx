const Header = ({onBack}: {onBack:() => void}) => {
  return (
    <button onClick={onBack}>
      Back to Table of Contents
    </button>
  )
}

export default Header;
