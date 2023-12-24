import React from "react"

const Card = (props) => {

    console.log(props)

    let popular
    if (props.popular === true) {
        popular = "POPULAR"
    }
    let soldOut
    if (props.available === false) {
        soldOut = "Sold out"
    }
    return (
        <>
            <div className="card-wrapper">
                <div className="card-container">
                    {popular && <div className="popular">{popular}</div>}
                    <img src={props.image}
                    alt={`a picture of ${props.name}`} width="200px" height="height" />
                    <div className="name-price-container">
                        <p className="coffee-price-p">{props.name}</p><span className="price-span">{props.price}</span>
                    </div>
                    <div className="rating-container">
                        <img src="public/Star_fill.svg" alt="a filled star" width="20px" height="auto"/>
                        <span className="rating-span">{props.rating}</span>
                        <span className="votes-span">{props.votes ? `(${props.votes} votes)` : "No ratings"}</span>
                        {soldOut && <span className="sold-out-span">{soldOut}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card