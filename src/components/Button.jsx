import { Link } from "react-router-dom";

function Button({text, link = '', onClick = ''}) {
    if(link) {
        return (
            <Link to={link}>
                <button className="rounded-lg bg-black px-6 py-4 text-white">
                    <p>{text}</p>
                </button>
            </Link>
        )
    }
    else {
        return (
            <button 
                className="rounded-lg bg-black px-6 py-4 text-white"
                onClick={onClick}
            >
                <p>{text}</p>
            </button>
        )
    }
}

export default Button