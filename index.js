function submitTestCases() {
    var suiteId = document.getElementById('suite-id').value;
    let objective = document.getElementById('objective').value;
    let stepOne = document.getElementById('step-1').value;
    let stepTwo = document.getElementById('step-2').value;
    let status = document.getElementById('testcase-status');
    let statusText = status.options[status.selectedIndex].text;
    let bug = document.getElementById('bug').value;

    if (localStorage.getItem('id')) {
        localStorage.setItem('id', +(localStorage.getItem('id')) + 1)
    } else {
        localStorage.setItem('id', "0");
    }

    let object = {
        suiteId: suiteId,
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

    buildTable(object);
    //gọi hàm build table với biến object đã được thêm bên trên để thêm vào luôn trong bảng
};


let newarray = JSON.parse(localStorage.getItem('TestCasesData'));
//tạo hàm getObject để map lại từ phần tử đầu tới phần tử đã post(add vào mảng)
    function getObject(dataArray){

        //Dùng vòng for để lặp lại hàm build table cho từng i trong mảng
        for (i = 0; i < dataArray.length; i++){
            buildTable(dataArray[i]);
        }
    }

    getObject(newarray);

    function buildTable(data) {
        //nếu trong data object có suiteId = 1,2,3 thì chạy hàm tableId với tham số tương t ứng với từng table
        tableId(data);
    };

    function tableId(data){
        //Lấy element tbody + tham số data.suiteId
        var table = document.getElementById(`table-data-${data.suiteId}`);
        //kiểm tra số hàng đã có trong tbody
        var rowCountOne = table.rows.length;
        //Điền các thông tin vào bảng. Thông tin lấy từ array get từ localStorage
        //id điền từ 1, vậy nên row count các hàng đã có thì sẽ là rowCountOne + 1
        var row = `<tr>
            <td>${data.suiteId}</td>
            <td>${rowCountOne + 1}</td>
            <td>${data.Objective}</td>
            <td>${data.Step1}</td>
            <td>${data.Step2}</td>
            <td>${data.Status}</td>
            <td>${data.BugDetails}</td>
                    </tr>`
        table.innerHTML += row;

    }