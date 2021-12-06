import "./style.css"

const Footer = ({empresa}) => {
    return(
        <footer>
            <p>{empresa.nome}</p> 
        </footer>
    )
}

export default Footer