import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const OpcoesHeader = styled.ul`
    display: flex;
`

function OpcoesHeader() {
    return (
        <OpcoesHeader>
            {textoOpcoes.map((texto) => (
                <li className="opcao" ><p>{texto}</p></li>
            ))}
        </OpcoesHeader>
    );
}

export default OpcoesHeader;