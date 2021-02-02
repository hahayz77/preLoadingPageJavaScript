async function preLoad(){
    var loading = document.getElementById("loading");
    var body = document.body;
    await setTimeout(() => { 
        loading.style.display = "none";
        body.style.overflow = "auto";
        
        }, 2000);
}