let idArray = [];
let apps = [];
let counter = 0;

function openApp(appid){
switch (appid) {
    case "calculator":
        let id = createWindow();
        win = apps[id-1];
        win.innerHTML = `
        <h4>Calculator App</h4>
        <p>WIP, this is a test!</p>
        `;
        break;

    case "messages":

        break;

    default:
        console.error(`AppID ${appid} not configured!`)
        break;
}    
}

function createWindow() {
    counter++;
    idArray.push(counter);
    let win = document.createElement("div");
    apps[counter - 1] = win;
    return counter;
}

document.querySelectorAll(".app").forEach((app)=>{
    app.addEventListener("click", ()=>{
        openApp(app.getAttribute("appid"))
    });
});