const tbody = document.getElementById('tablebody')


const CallAPI = () =>{

    fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
    .then(response => response.json())
    .then(json => {

        for(let i=0; i<100; i++)
        {

            var row = 
            `<tr>
            <td>${i+1}</td>
            <td>${json[i].symbol}</td>
            <td>${json[i].volume}</td> 
            <td>${json[i].lowPrice}</td>
            <td>${json[i].highPrice}</td>
            <td>${json[i].openPrice}</td>
            </tr>`

            tbody.innerHTML += row
        }
    }
    )

}

CallAPI()