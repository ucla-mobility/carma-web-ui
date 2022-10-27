/***
* Update ADS health status light
    green: 0
    yellow: 1
    red: 2
*/
function updateADSHealthStatus(adsStatus) {

    let adsHealthLight = document.getElementById('ads-health-light');
    if (adsHealthLight == null || adsHealthLight == "undefined") {
        adsHealthLight = document.createElement('div');
        adsHealthLight.classList.add('ads-health-light');
        adsHealthLight.id = 'ads-health-light';
    }

    adsHealthLight.style.backgroundColor = adsStatus;
    // switch (adsStatus) {

    //     case 0:
    //         adsHealthLight.style.background = "green";
    //         break;
    //     case 1:
    //         adsHealthLight.style.background = "yellow";
    //         break;
    //     case 2:
    //         adsHealthLight.style.background = "red";
    //         break;
    //     default:
    //         break;
    // }

    return adsHealthLight;
}

/***
* Update PrePass decision light 
*/
function updatePrePassDecisionStatus(prePassDecision) {

    let prePassDecisionLight = document.getElementById('ads-decision-light');
    if (prePassDecisionLight == null || prePassDecisionLight == "undefined") {
        prePassDecisionLight = document.createElement('div');
        prePassDecisionLight.classList.add('ads-decision-light');
        // prePassDecisionLight.innerHTML = "By-Pass";
        prePassDecisionLight.id = 'ads-decision-light';

    }

    switch (prePassDecision) {

        case false:
            prePassDecisionLight.style.background = "green";
            prePassDecisionLight.innerHTML ="By-Pass";
            break;
        case true:
            prePassDecisionLight.style.background = "red";
            prePassDecisionLight.innerHTML ="Pull-in";
            break;
        default:
            prePassDecisionLight.style.background = "grey";
            prePassDecisionLight.innerHTML ="";
            break;
    }

    // // add for testing
    // if (prePassDecision){
    //     prePassDecisionLight.style.background = "red";
    //     prePassDecisionLight.innerHTML ="Pull-in";
    // } else {
    //     prePassDecisionLight.style.background = "green";
    //     prePassDecisionLight.innerHTML ="By-Pass";
    // }
    // // add end

    return prePassDecisionLight;
}

//initialization: call create widget function
$(document).ready(function () {
    //set initial time
    $('.ads-health-col').append(updateADSHealthStatus("green"));
    $('.ads-decision-col').append(updatePrePassDecisionStatus());
});