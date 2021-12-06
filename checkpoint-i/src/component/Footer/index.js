/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss"

const Footer = () => {
    return(
        <div className="container" id="contato">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="text-muted">&copy; 2021 Meu portifólio</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://github.com/helenaperdigueiro"><img className="bi" width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" /></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/helenaperdigueiro/"><img className="bi" width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" /></a></li>
      <li className="ms-3"><a className="text-muted" href="mailto:helena.perdigueiro@gmail.com"><img className="bi" width="24" height="24" src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1637031784~hmac=dde543fcc38d77ba67f167a51a20d3d0" alt="" /></a></li>
    </ul>
  </footer>
</div>
    )
}

export default Footer