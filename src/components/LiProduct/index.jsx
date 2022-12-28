import { Li, UlButtons, UlText } from './styles'
export default function LiProduct({ product, handleDelete }) {
    return (
        <Li>
            <UlText>
                <strong>{product.amount}</strong>
                <span>{product.name}</span>
            </UlText>
            <UlButtons>
                <button onClick={() => handleDelete(product.id)}>Deletar</button>
                <button>Editar</button>
            </UlButtons>
        </Li>
    )
}
