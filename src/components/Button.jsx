import { Link } from "react-router-dom";

function Button({text, link = '', onClick = '', className = ''}) {
    if(link) {
        return (
            <Link to={link}>
                <button className={`rounded-lg bg-black px-6 py-4 text-white ${className}`}>
                    <p>{text}</p>
                </button>
            </Link>
        )
    }
    else {
        return (
            <button 
                className={`rounded-lg bg-black px-6 py-4 text-white ${className}`}
                onClick={onClick}
            >
                <p>{text}</p>
            </button>
        )
    }
}

export default Button