import {ErrorStyle}  from "../css/ErrorStyle"

const Error = () => {
    return (
        <ErrorStyle> 
            <div>
                <h1>Error 404-Page Not Found!</h1>
                <img src="./src/assets/404.png" alt="" />
            </div>
        </ErrorStyle> 
    )
}
export default Error