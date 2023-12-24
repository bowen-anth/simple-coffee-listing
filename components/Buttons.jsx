import React from "react"

const Buttons = ({ selected, setSelected }) => {
//     const [selected, setSelected] = React.useState({
//         allProducts: true,
//         availableNow: false
//     })
// console.log(selected)
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
                <button className={selected.allProducts ? "all-products selected" : "all-products"} onClick={toggleProducts}>All Products</button>
                <button className={selected.availableNow ? "available-now selected" : "available-now"} onClick={toggleAvailable}>Available Now</button>
            </div>
        </>
    )
}

export default Buttons