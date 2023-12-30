function Hero(props) {
    return (
        <div className="hero-card">
            <h4 className="hero-name">{props.name}</h4>
            <p className="hero-universe">Вселенная: {props.universe}</p>
            <p className="hero-alterego">Альтер эго: {props.alterego}</p>
            <p className="hero-occupation">Род деятельности: {props.occupation}</p>
            <p className="hero-friends">Друзья: {props.friends}</p>
            <p className="hero-superpowers">Суперсилы: {props.superpowers}</p>
            <img src={props.url} alt={props.title} />
            <p className="hero-info">{props.info}</p>
        </div>
    );
}

export default Hero;