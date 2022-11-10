function submitTestCases() {
    var suiteId = document.getElementById('suite-id').value;
    let objective = document.getElementById('objective').value;
    let stepOne = document.getElementById('step-1').value;
    let stepTwo = document.getElementById('step-2').value;
    let status = document.getElementById('testcase-status');
    let statusValue = status.options[status.selectedIndex].value;
    let statusText = status.options[status.selectedIndex].text;
    let bug = document.getElementById('bug').value;

    if (localStorage.getItem('id')) {
        localStorage.setItem('id', +(localStorage.getItem('id')) + 1)
    } else {
        localStorage.setItem('id', "0");
    }

    let object = {
        SuiteID: suiteId,
        id: localStorage.getItem('id'),
        Objective: objective,
        Step1: stepOne,
        Step2: stepTwo,
        Status: statusText,
        BugDetails: bug
    };

    let array = JSON.parse(localStorage.getItem('TestCasesData'));

    if (array) {
        localStorage.setItem('TestCasesData', JSON.stringify([...array, object]));
    } else {

        localStorage.setItem('TestCasesData', JSON.stringify([object]));
    };

    let newarray = JSON.parse(localStorage.getItem('TestCasesData'));

    function buildTable(data) {

        var suiteId = document.getElementById('suite-id').value;

        

        if (suiteId == 1) {
            //Lấy element tbody = id
            var table = document.getElementById('table-data-1');
            //kiểm tra số hàng đã có trong tbody
            var rowCountOne = table.rows.length;
            //Điền các thông tin vào bảng. Thông tin lấy từ array get từ localStorage
            //id điền từ 1, vậy nên row count các hàng đã có thì sẽ là rowCountOne + 1
            var row = `<tr>
                <td>${suiteId}</td>
                <td>${rowCountOne + 1}</td>
                <td>${data[data.length - 1].Objective}</td>
                <td>${data[data.length - 1].Step1}</td>
                <td>${data[data.length - 1].Step2}</td>
                <td>${data[data.length - 1].Status}</td>
                <td>${data[data.length - 1].BugDetails}</td>
                        </tr>`
            table.innerHTML += row;
        } else if (suiteId == 2) {
            //lấy element tbody = id
            var table = document.getElementById('table-data-2');
            //kiểm tra số hàng đã có trong tbody
            var rowCountTwo = table.rows.length;
            var row = `<tr class = "row-id-2">
                <td>${suiteId}</td>
                <td>${rowCountTwo + 1}</td>
                <td>${data[data.length - 1].Objective}</td>
                <td>${data[data.length - 1].Step1}</td>
                <td>${data[data.length - 1].Step2}</td>
                <td>${data[data.length - 1].Status}</td>
                <td>${data[data.length - 1].BugDetails}</td>
                        </tr>`
            table.innerHTML += row;
        } else {
            var table = document.getElementById('table-data-3');
            var rowCountThree = table.rows.length;
            var row = `<tr class = "row-id-3">
                <td>${suiteId}</td>
                <td>${rowCountThree + 1}</td>
                <td>${data[data.length - 1].Objective}</td>
                <td>${data[data.length - 1].Step1}</td>
                <td>${data[data.length - 1].Step2}</td>
                <td>${data[data.length - 1].Status}</td>
                <td>${data[data.length - 1].BugDetails}</td>
                        </tr>`
            table.innerHTML += row;
        }
    };

    buildTable(newarray);
};

window.onload = (event) => { 
    let currentData = JSON.parse(localStorage.getItem('TestCasesData'));
};