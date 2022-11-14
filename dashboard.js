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

    let passSuiteOne = filterPass.filter(x => 
            x.suiteId == 1
        ).length;
    
    let passSuiteTwo = filterPass.filter(x => 
            x.suiteId == 2
        ).length;

    let passSuiteThree = filterPass.filter(x =>
            x.suiteId == 3
        ).length;

    let failPercentage = ((filterFail.length + filterFixed.length)/(data.length/100)).toFixed(2) + '%';

    let failSuiteOne = filterFail.filter(x => 
            x.suiteId == 1
        ).length;
    
    let failSuiteTwo = filterFail.filter(x => 
            x.suiteId == 2    
        ).length;

    let failSuiteThree = filterFail.filter(x => 
            x.suiteId == 3     
        ).length;

    let testCoverage = (((data.length - filterPending.length) / data.length) * 100).toFixed(2) + '%';

    let pendingSuiteOne = filterPending.filter(x=>
            x.suiteId == 1
        ).length;

    let pendingSuiteTwo = filterPending.filter(x=>
            x.suiteId == 2
        ).length;

    let pendingSuiteThree = filterPending.filter(x=>
            x.suiteId == 3
        ).length;

    let bugFixed = filterFixed.length + '/' + (filterFail.length + filterFixed.length) + ' total bugs';

    let bugRemain = filterFail.length + '/' + (filterFail.length + filterFixed.length) + ' total bugs';

    let arrayResult = [passPercentage,failPercentage,testCoverage,bugFixed,bugRemain,passSuiteOne,passSuiteTwo,passSuiteThree,failSuiteOne,failSuiteTwo,failSuiteThree,pendingSuiteOne,pendingSuiteTwo,pendingSuiteThree];

    localStorage.setItem('dashboardResult', arrayResult);
}

function dashboardDisplay (){
    
    let display = localStorage.getItem('dashboardResult').split(",");
    document.getElementById('pass-percentage').innerHTML = display[0];
    document.getElementById('fail-percentage').innerHTML = display[1];
    document.getElementById('test-coverage').innerHTML = display[2];
    document.getElementById('num-bug-fixed').innerHTML = display[3];
    document.getElementById('num-bug-failed').innerHTML = display[4];
    document.getElementById('suite-pass').innerHTML = 'No. cases pass/suite:' + '<br/>' + 'Sutie 1: ' + display[5] + '<br/>' + 'Sutie 2: ' + display[6] + '<br/>' + 'Suite 3: ' + display[7];
    document.getElementById('suite-fail').innerHTML = 'No. cases fail/suite:' + '<br/>' + 'Sutie 1: ' + display[8] + '<br/>' + 'Sutie 2: ' + display[9] + '<br/>' + 'Suite 3: ' + display[10];
    document.getElementById('suite-pending').innerHTML = 'No. cases untested/suite:' + '<br/>' + 'Sutie 1: ' + display[11] + '<br/>' + 'Sutie 2: ' + display[12] + '<br/>' + 'Suite 3: ' + display[13];
}