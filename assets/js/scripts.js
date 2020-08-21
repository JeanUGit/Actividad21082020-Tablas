 
 const $templatePage = document.getElementById("templatePage").content.cloneNode(true);
 const $divMain = document.getElementById("divMain");
 
 async function Fnc_ListarDatos(){
     const request = await fetch("assets/js/DATABASE.JSON");
     const data = await request.json();
     console.log(data);

    //Datos
    const $dataTable = $templatePage.querySelector("[data-subsection='data']");
    data.PCs.forEach((element,index) => {
        const itemTr = document.createElement("tr");
        itemTr.innerHTML = `<td>${index+1}</td>`;
        element.forEach((value)=>{
            itemTr.innerHTML += `<td>${value}</td>`;
        });
        $dataTable.appendChild(itemTr);
    });


};

document.addEventListener("DOMContentLoaded", async()=>{
    await Fnc_ListarDatos();
    $divMain.appendChild($templatePage);
});