import { Link } from "react-router-dom";

function Button({text, link = '', onClick = ''}) {
        return (
            <Link to={link} onClick={onClick}>
                <button className="">
                    <p>{text}</p>
                </button>
            </Link>
        )
}

export default Button