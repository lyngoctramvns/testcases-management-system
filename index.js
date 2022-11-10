function submitTestCases() {
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
            var table = document.getElementById('table-data-1');
            var row = `<tr>
                <td>${suiteId}</td>
                <td>${data[data.length - 1].id}</td>
                <td>${data[data.length - 1].Objective}</td>
                <td>${data[data.length - 1].Step1}</td>
                <td>${data[data.length - 1].Step2}</td>
                <td>${data[data.length - 1].Status}</td>
                <td>${data[data.length - 1].BugDetails}</td>
                        </tr>`
            table.innerHTML += row;
        } else if (suiteId == 2) {
            var table = document.getElementById('table-data-2');
            var row = `<tr>
                <td>${suiteId}</td>
                <td>${data[data.length - 1].id}</td>
                <td>${data[data.length - 1].Objective}</td>
                <td>${data[data.length - 1].Step1}</td>
                <td>${data[data.length - 1].Step2}</td>
                <td>${data[data.length - 1].Status}</td>
                <td>${data[data.length - 1].BugDetails}</td>
                        </tr>`
            table.innerHTML += row;
        } else {
            var table = document.getElementById('table-data-3');
            var row = `<tr>
                <td>${suiteId}</td>
                <td>${data[data.length - 1].id}</td>
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