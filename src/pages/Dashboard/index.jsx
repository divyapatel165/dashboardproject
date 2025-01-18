import Analytics from "../Analytics";
import Orders from "../Orders";
const Dashboard = () => {
    return (
        <>
            <div style={{overflow:"scroll",height:"700px"}}>
            <Analytics/>
            <Orders/>
            </div>
        </>
    )
};
export default Dashboard;