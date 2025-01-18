const Top=()=>{
    let infoname = localStorage.getItem('infoname');
    let infoemail = localStorage.getItem('infoemail');
    return(
        <>
        <center>
        <div id="dash"> DashBoard
        </div>
        <span style={{fontSize:"20px",color:"white"}}>{infoemail}</span>
        <span style={{fontSize:"20px",color:"white"}}>{infoname}</span>
        </center>
        </>
    )
}
export  default Top;