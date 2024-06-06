import { Link } from "react-router-dom";

function Button({text, link = '', onClick = ''}) {
        return (
            <Link to={link} onClick={onClick}>
                <p>{text}</p>
            </Link>
        )
}

export default Button