import { Form } from "react-router-dom"
import Button from "../components/Button"

function Shop() {
    return (
        <div>
            <Form>
                <input type="text" placeholder="chocolate mille feuille"></input>
                <Button text="search"/>
            </Form>
        </div>
    )
}

export default Shop