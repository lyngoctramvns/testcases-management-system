function submitTestCases() {
    let objective = document.getElementById('objective').value;
    let stepOne = document.getElementById('step-1').value;
    let stepTwo = document.getElementById('step-2').value;
    let bug = document.getElementById('bug').value;

    if(localStorage.getItem('id')){
        localStorage.setItem('id', +( localStorage.getItem('id')) + 1)
    } else {
        localStorage.setItem('id', "0");
    }

    let object = {
        id: localStorage.getItem('id'),
        Objective: objective,
        Step1: stepOne,
        Step2: stepTwo,
        BugDetails: bug
    };

    let array = JSON.parse(localStorage.getItem('TestCasesData'));

    if(array){
        localStorage.setItem('TestCasesData', JSON.stringify([...array, object]));
    } else {

        localStorage.setItem('TestCasesData', JSON.stringify([object]));
    };

};