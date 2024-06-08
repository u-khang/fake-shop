import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-router-dom"
import Button from "../components/Button"


function Shop() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("../products.json", { mode: "cors" })
          .then((response) => setProducts(response.json()))
          .catch((error) => console.error(error));
      }, []);

    return (
        <div>
            <Form>
                <input type="text" placeholder="chocolate mille feuille"></input>
                <Button text="search"/>
            </Form>
            <p>{products[1]["name"]}</p>
        </div>
    )
}

export default Shop