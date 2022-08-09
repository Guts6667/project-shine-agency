import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Logo from '../../assets/light-logo.png'
import PropTypes from 'prop-types'


const StyledLink = styled(Link)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderWrapper = styled.header`
    display : flex;
    justify-content : space-between;
    align-items : center;

`
function Header({logo, logoAlt}) {
    return (
        <HeaderWrapper>
          <div>
            <img src={logo} alt={logoAlt}  />
          </div>
          <nav>
              <StyledLink to="/">Accueil</StyledLink>
              <StyledLink to="/freelances">Profils</StyledLink>
              <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
          </nav>
        </HeaderWrapper>
        
    )
}

Header.propTypes = {
 logo : PropTypes.string.isRequired,
 logoAlt : PropTypes.string.isRequired
}

Header.defaultProps ={
  logo : Logo,
  logoAlt : 'Logo Shiny'
}

export default Header