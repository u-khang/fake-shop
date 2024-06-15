import { Link } from "react-router-dom";

function Button({text, link = '', onClick = ''}) {
    if(link) {
        return (
            <Link to={link}>
                <button className="">
                    <p>{text}</p>
                </button>
            </Link>
        )
    }
    else {
        return (
            <button onClick={onClick}>
                <p>{text}</p>
            </button>
        )
    }
}

export default Button