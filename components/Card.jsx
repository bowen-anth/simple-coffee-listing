import React from "react"

const Card = ({ data }) => {

    console.log(data)

    let popular
    if (props.data.popular === true) {
        popular = "POPULAR"
    }
    let soldOut
    if (props.data.available === true) {
        soldOut = "Sold out"
    }
    return (
        <>
            <div className="card-container">
                {popular && <div className="card--badge">{popular}</div>}
                <img src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg" 
                alt="" width="200px" height="height" />
                <p className="coffee-price-p">Cappuccino<span className="price-span">$5.20</span></p>
                <div className="rating-container">
                    <img src="public/Star_fill.svg" alt="a filled star" width="10px" height="auto"/>
                    <span className="rating-span">4.9</span>
                    <span className="votes-span">(55 votes)</span>
                    {soldOut && <span className="sold-out-span">{soldOut}</span>}
                </div>
            </div>
        </>
    )
}

export default Card