var project_name = document.getElementById("name")
var table_status = document.getElementById("table1")
var table_duty = document.getElementById("duty")
var table_detail = document.getElementById("detail")


$.ajax({
    type: 'get',
    async: false,
    url: 'http://localhost:9000/',
    dataType: 'json',
    success: function (result) {
        console.log(result)
        let table1 = ""
        console.log(result.list.length)
        for (let i = 0; i < result.list.length; i++) {
            console.log(result.list[i])
            table1 += `<tr style='background:#ffffff; color:#333333'>`
            table1 += `<td>` + i + `</td>`
            table1 += `<td>` + result.list[i]['mark'] + `</td>`
            table1 += `<td>` + result.list[i]['description'] + `</td>`
            table1 += `<td>` + result.list[i]['status'] + `</td>`
            table1 += `<td>` + result.list[i]['note'] + `</td>`
            table1 += `</tr>`
        }
        table_status.innerHTML = table1
    }
})
// project_name.innerHTML = "HELLO"
