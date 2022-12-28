import { Buttons, ButtonDelete, Li, TextDiv } from './styles.js'
import imgWoman from '../../assets/woman.png'
import imgMan from '../../assets/man.png'
import { Link } from 'react-router-dom'

export function LiClient({ client, handleDelete }) {

    const genre = client.genre == 'feminino' ? imgWoman : imgMan

    return (
        <Li>
            <img src={genre} alt={client.alt} />
            <TextDiv>
                <h2>{client.name}</h2>
                <span>{client.description}</span>
            </TextDiv>
            <Buttons>
                <Link to={`/shoppingcart/${client.id}`}>
                    <button>Abrir cardeneta</button>
                </Link>
                <ButtonDelete
                    onClick={() => handleDelete(client.id)}
                >Deletar</ButtonDelete>
            </Buttons>
        </Li>
    )
}
