function dashBoard (){
    let array = JSON.parse(localStorage.getItem('TestCasesData'));
    const filterPass = array.filter(x =>
        x.Status == 'Pass'
    );
    
    const filterFail = array.filter(x => 
            x.Status == 'Fail'
        );

    const filterPending = array.filter(x =>
            x.Status == 'Pending'
    );

    const filterFixed = array.filter(x=> 
        x.Status == 'Fixed'
    );

    
    calculationDashboard(array,filterPass,filterFail,filterPending,filterFixed);
    dashboardDisplay();
    
};


function calculationDashboard(data,filterPass,filterFail,filterPending,filterFixed){

    let passPercentage = (filterPass.length/(data.length/100)).toFixed(2) + '%';

    let failPercentage = ((filterFail.length + filterFixed.length)/(data.length/100)).toFixed(2) + '%';

    let testCoverage = (((data.length - filterPending.length) / data.length) * 100).toFixed(2) + '%';

    let bugFixed = filterFixed.length + '/' + (filterFail.length + filterFixed.length) + ' total bugs';

    let bugRemain = (filterFail.length + filterFixed.length) - filterFixed.length + '/' + (filterFail.length + filterFixed.length) + ' total bugs'

    let arrayResult = [passPercentage,failPercentage,testCoverage,bugFixed,bugRemain];

    localStorage.setItem('dashboardResult', arrayResult);
}

function dashboardDisplay (){
    
    let display = localStorage.getItem('dashboardResult').split(",");
    document.getElementById('pass-percentage').innerHTML = display[0];
    document.getElementById('fail-percentage').innerHTML = display[1];
    document.getElementById('test-coverage').innerHTML = display[2];
    document.getElementById('num-bug-fixed').innerHTML = display[3];
    document.getElementById('num-bug-failed').innerHTML = display[4];

}