import { Link } from "react-router-dom";

function MissingPage() {
    return (
        <div>
            <h1>404 error</h1>
            <Link to="/">get back to the home page</Link>
        </div>
    );
}

export default MissingPage;
