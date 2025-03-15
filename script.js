const data = [
    { name: "Galib (Host)", phone: "01308150275", status: "Okh", amount: "0", },
    { name: "Sizam", phone: "01824423211", status: "Okh", amount: "0", },
    { name: "Bavid", phone: "01864746518", status: "Okh", amount: "0", },
    { name: "Sakib", phone: "01797806018", status: "Okh", amount: "0", },
    { name: "Parvej (Host)", phone: "01315724240", status: "Okh", amount: "0",},
    { name: "Anas", phone: "01839494231", status: "Okh", amount: "0", },
    { name: "Tasin", phone: "01747804850", status: "Okh", amount: "0", },
    { name: "Kaziul", phone: "01926457379", status: "Okh", amount: "0", },
    { name: "Kader", phone: "01568451358", status: "Okh", amount: "0", },
    { name: "Tanvir", phone: "01948352607", status: "Okh", amount: "0", },
    { name: "Kalam", phone: "01862317303", status: "Pending", amount: "0", },
    { name: "Wadud", phone: "01750284026", status: "Pending", amount: "0", },
    { name: "Mahin", phone: "01705820425", status: "Pending", amount: "0", },
    { name: "Galib-2", phone: "01708359545", status: "Pending", amount: "0", },
    { name: "Shawon", phone: "01843059199", status: "Pending", amount: "0", },
    { name: "Rafi", phone: "0193793373", status: "Pending", amount: "0", },
    { name: "Aiman", phone: "01518993656", status: "Pending", amount: "0", },
    { name: "Mustahid", phone: "01882985959", status: "Okh", amount: "0", },
    { name: "3-Mota", phone: "", status: "Pending", amount: "0", },
    { name: "3-Mota", phone: "", status: "Pending", amount: "0", },
    { name: "3-Mota", phone: "", status: "Pending", amount: "0", },
    { name: "3-Mota", phone: "", status: "Pending", amount: "0", },
    { name: "Nasir", phone: "01885932006", status: "Okh", amount: "0", },
    { name: "Nasir's Wife", phone: "", status: "Okh", amount: "0", },
    { name: "Kawsar", phone: "", status: "Pending", amount: "0", },
    { name: "Moinul", phone: "", status: "Pending", amount: "0", },
    { name: "Maruf", phone: "01763013889", status: "Pending", amount: "0", }
];
;

function loadTable() {
    const table = document.getElementById("dataTable");
    table.innerHTML = "";

    

    let count = 0
    let done = 0
    let amoun = 0
    data.forEach(person => {
        count++
        let statusColor = person.status === "Okh" ? "bg-blue-50" : person.status === "Pending" ? "bg-orange-100" : "";
        let phone = person.phone === '' ? '-----' : person.phone
        let paymentColor
        let ispaid
        if(person.amount === '250'){
            amoun +=250
            done++ 
            paymentColor = 'bg-blue-200'
            ispaid = 'Paid'
        }else{
            paymentColor = 'bg-red-200'
            ispaid = 'Unpaid'
        }
        
        table.innerHTML += `
            <tr class="border border-gray-300">
                <td class="border border-gray-300 text-[10px] pl-2 font-semibold">${count}.${person.name}</td>
                <td class="border border-gray-300 text-[10px] text-center">${phone}</td>
                <td class="border border-gray-300 text-[10px] text-center ${statusColor} font-semibold">${person.status}</td>
                <td class="border border-gray-300 text-[10px] text-center">${person.amount}</td>
                <td class="border border-gray-300 text-[10px] ${paymentColor} text-center font-semibold">${ispaid}</td>
            </tr>
        `;
    });
    console.log(amoun)
    const total = document.querySelector('.mt-4')
    total.innerHTML = `
        <h2 class="font-bold text-[14px]">Total Polapan : ${count} </h2>
        <h2 class="font-bold text-[14px]">Tk diche : ${done}</h2>
        <h2 class="font-bold text-[14px]">Total Tk : ${amoun}</h2>
    `
}

window.onload = loadTable;