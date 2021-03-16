import './Skill.css'

const Skill = (props) => {

    let obj = props.obj

    return (
        <article className="skill">
            <header>
                <p>Since {obj.start}</p>
                <h1>{obj.title}</h1>
            </header>
            <div className="container">
                <img src={props.path} width={props.size}></img>
                
            </div>
            <p className="paragraph">
                {obj.desc}
            </p>
        </article>
    )

}

export default Skill