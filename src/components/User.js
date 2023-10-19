import Dashboard from "./Dashboard";

const User = ({data}) => {
    return (
        <div className="userDashboard">
            <Dashboard />
            <div className="userWelcome">
                <h1>Welcome {data[0].username}!!!</h1>
            </div>
        </div>
    )
}

export default User