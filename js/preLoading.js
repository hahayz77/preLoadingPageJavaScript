async function preLoad(){
    var body = document.body;
    body.style.overflow = "hidden";
    var loading = document.getElementById("loading");    
    await setTimeout(() => { 
        loading.style.display = "none";
        body.style.overflow = "auto";
        }, 2000);
}