function MyClockTime(){
    const date = new Date();
    return(
       <p className="time">{date.toLocaleTimeString()}</p>
    );
}

export default MyClockTime