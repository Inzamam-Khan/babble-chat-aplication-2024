export const getTime=(t)=>{
    const time =new Date(t)
    // console.log(new Date().toDateString())
    // console.log(time.toDateString()=== new Date().toDateString())
    const hours=time.toLocaleTimeString()
    return hours;
}