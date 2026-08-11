function openApp(appid){
    
}
document.querySelectorAll(".app").forEach((app)=>{
    app.addEventListener("click", ()=>{
        openApp(app.getAttribute("appid"))
    });
});