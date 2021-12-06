/* eslint-disable jsx-a11y/anchor-is-valid */
import cardStock from "./card_stock.jpg"
import ohMyTasks from "./oh_my_tasks.jpg"
import coffeeOClock from "./coffee_o_clock.jpg"
import "./style.scss"

const Projetos = () => {
    const listaProjetos = [
        {
            id: 1,
            img: ohMyTasks,
            nome: "OhMyTasks",
            descricao: "Mantenha controle de suas tarefas de uma forma divertida!",
            linkPagina: "https://helenaperdigueiro.github.io/CheckpointIIFrontEndII/",
            linkGitHub: "https://github.com/helenaperdigueiro/CheckpointIIFrontEndII"
        },
        {
            id: 2,
            img: cardStock,
            nome: "CardStock",
            descricao: "Guarde suas inspirações para encontrá-las quando precisar!",
            linkPagina: "https://helenaperdigueiro.github.io/CheckpointIFrontEndII_individual/",
            linkGitHub: "https://github.com/helenaperdigueiro/CheckpointIFrontEndII_individual"
        },
        {
            id: 3,
            img: coffeeOClock,
            nome: "Coffee O'Clock",
            descricao: "Meu primeiro projeto usando React JS! É super simples, mas fiquei orgulhosa!",
            linkPagina: "https://frontend-iii-aula-05.vercel.app/",
            linkGitHub: "https://github.com/helenaperdigueiro/FrontendIII/tree/main/aula-05"
        }
    ]
    return (
        <div id="projetos">
            <div className="album py-5 bg-light" id="projetos">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            listaProjetos.map(({ id, nome, img, descricao, linkPagina, linkGitHub }) => {
                                return (


                                    <div key={id} className="col">
                                        <div className="card shadow-sm">
                                            <a href={linkPagina}><img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img} aria-label="Placeholder: Thumbnail" alt="imagem" /></a><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{nome}</text>

                                            <div className="card-body">
                                                <p className="card-text">{descricao}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href={linkGitHub}><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github" /></a>
                                                        <a href={linkPagina}><button type="button" className="btn btn-sm btn-outline-secondary">Página</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos