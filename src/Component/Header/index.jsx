import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const StyledHeader = styled.header`
    padding:60px 0;
    display:flex;
    justify-content: space-between;
    img{
        width: 212px;
    }


`

const Header = () => {
    return <>
        <StyledHeader>
            <img src="/imagenes/logo.png" alt="Logo de Space App" />
            <CampoTexto />
        </StyledHeader>
    </>
}

export default Header