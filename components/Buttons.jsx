import React from "react"

const Buttons = () => {
    const [selected, setSelected] = React.useState({
        allProducts: true,
        availableNow: false
    })
console.log(selected)
    const toggleProducts = () => {
        setSelected(prevState => {
            return {
                allProducts: true,
                availableNow: false
            }
        })
    }

    const toggleAvailable = () => {
        setSelected(prevState => {
            return {
                allProducts: false,
                availableNow: true
            }
        })
    }

    return (
        <>
            <div className="button-container">
                <button className="all-products" onClick={toggleProducts}>All Products</button>
                <button className="available-now" onClick={toggleAvailable}>Available Now</button>
            </div>
        </>
    )
}

export default Buttons