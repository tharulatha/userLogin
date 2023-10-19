import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();
    const logoutFun = () => {
        navigate('/', {replace: true})
    }
    const userform = () => {
        navigate('/form', {replace: true})
    }
    return (
        <div className="dashboradContainer">
            <ul>
                <li>Dashboard</li>
                <li onClick={userform}>UserForm</li>
                <li onClick={logoutFun}>Logout</li>
           </ul>
        </div>
    )
}

export default Dashboard