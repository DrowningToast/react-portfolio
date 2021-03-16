import './Card.css'
import idCard from './id-card.png'

function Card(props) {
    
    console.log(props.path)

    return (
        <div className='card'>
            
            <div className="icon">
                <img src={props.path}/>
            </div>
            
            <div className="title">
                <h1>
                    {props.title}
                </h1>

                <a href={props.hyper}><button>
                    View more
                </button></a>
            </div>
            

        </div>
        
    )

}


export default Card;