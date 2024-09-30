import {useState} from 'react'
import './Flashcard.css'

const Flashcard = ({category, q, a, src}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const flipCard = () => {
        setShowAnswer(!showAnswer)
    }

    return(
        <div
            className="cardWrapper"
            onClick={flipCard}
            style={{backgroundColor: (category === "PBS KIDS") ? "lavender" : "lightskyblue"}}
        >
            {!showAnswer ? 
                <p className="content">{q}</p>
                :
                <div>
                    <p className="content">{a}</p>
                    <div className="imgWrapper">
                        <img src={src} height="100%" min-width="100%"/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Flashcard