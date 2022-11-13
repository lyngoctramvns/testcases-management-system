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

    let passPercentage = filterPass.length/(data.length/100) + '%';

    let failPercentage = (filterFail.length + filterFixed.length)/(data.length/100) + '%';

    let testCoverage = ((data.length - filterPending.length) / data.length) * 100 + '%';

    let bugFixed = filterFixed.length + '/' + (filterFail.length + filterFixed.length) + ' total bugs';

    let bugRemain = (filterFail.length + filterFixed.length) - filterFixed.length + '/' + (filterFail.length + filterFixed.length) + ' total bugs'

    localStorage.setItem('Pass', passPercentage);
    localStorage.setItem('Fail', failPercentage);
    localStorage.setItem('Coverage', testCoverage);
    localStorage.setItem('Fixed', bugFixed);
    localStorage.setItem('Remain', bugRemain);
}

function dashboardDisplay (){
    
    let passDisplay = localStorage.getItem('Pass');

    document.getElementById('pass-percentage').innerHTML = passDisplay;

    let failDisplay = localStorage.getItem('Fail');

    document.getElementById('fail-percentage').innerHTML = failDisplay;

    let testCoverageDisplay = localStorage.getItem('Coverage');

    document.getElementById('test-coverage').innerHTML = testCoverageDisplay;

    let bugFixedDisplay = localStorage.getItem('Fixed');

    document.getElementById('num-bug-fixed').innerHTML = bugFixedDisplay;

    let bugRemainDisplay = localStorage.getItem('Remain');

    document.getElementById('num-bug-failed').innerHTML = bugRemainDisplay;

}