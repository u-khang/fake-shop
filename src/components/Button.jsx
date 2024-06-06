import { Link } from "react-router-dom";

function Button({text, link = '', onClick = ''}) {
        return (
            <Link to={link} onClick={onClick}>
                <button>
                    <p>{text}</p>
                </button>
            </Link>
        )
}

export default Button