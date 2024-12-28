const logoutbtnEl = document.querySelector(".logout-btn")

logoutbtnEl.addEventListener("click", ()=>{
    localStorage.removeItem("accessToken")
    open("/pages/login.html", "_self")
})

function checkToken(){
fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`, 
    }, 
  })
  .then((res) => {
    if(!res.ok){
        throw new Error("Token xato")
    }
    return res.json()
  })
  .then((res)=>{
    console.log(res);
    
  })
  .catch(err =>{
    window.location.replace("/pages/login.html")
  })
}
window.onload = ()=>{
    checkToken()
}