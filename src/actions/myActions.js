const anotherName =()=>{
return (dispath)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(
        res2=>{
            dispath({type:'CHANGE_NAME',payload:res2[0].name})
        }
    )

}
}
export default anotherName;