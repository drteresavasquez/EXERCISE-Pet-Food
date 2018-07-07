const getData = () => {
    fetch('data.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            renderDOM(myJson)
        });
}

function renderDOM(data) {
    console.log(data);
    let array = data.dog_brands;
        
    array.forEach((item)=>{
        let str = (item.name).replace(/\s/g, '');
        let typesArray = item.types;

        $(".container").append(`
        <table class="table">
            <thead>
                <tr>
                    <th>${item.name}</th>
                </tr>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Volumes</th>
                    <th scope="col">Prices</th>
                </tr>
            </thead>
            <tbody class="${str}">
                
            </tbody>
        </table>`);
        tableBody(typesArray, str);
    })
}

function tableBody(typesArray, id){
    console.log(typesArray)
    typesArray.forEach((type)=>{
        $(`.${id}`).append(`
        <tr>
            <th scope="row">${type.type}</th>
            <td>${type.volumes[0].name} / ${type.volumes[1].name}</td>
            <td>${type.volumes[0].price} / ${type.volumes[1].price}</td>
        </tr>
        `);
    })
}

getData();