/**
 * Subscribe to /message/ads_safety_data
 */
function subscribeToADSSafety() {
    let listener = new ROSLIB.Topic({
        ros: g_ros,
        name: T_ADS_SAFETY_DATA,
        messageType: M_ADS_SAFETY
    });

    listener.subscribe(function (message) {
        //Check ROSBridge connection before subscribe a topic
        IsROSBridgeConnected();
        if (message != null && message.ads_status.ads_health_status != null) {
            let ads_health_light = message.ads_status.ads_health_status;
            if (document.getElementById('ads-health-light') != null) {

                updateADSHealthStatus(ads_health_light);
            }
            else {
                //Create ads health and status light if not exist in html
                $('.ads-health-col').append(updateADSHealthStatus(ads_health_light));
            }
        }
    });
}

/**
 * Subscribe to prepass_decision
 */
function subscribeToPrePass() {
    let listener = new ROSLIB.Topic({
        ros: g_ros,
        name: T_PRE_PASS_DECISION,
        messageType: M_BOOL
    });

    listener.subscribe(function (message) {
        //Check ROSBridge connection before subscribe a topic
        IsROSBridgeConnected();
        if (message != null && message.data != null) {
            let pre_pass_decision = message.data;
            if (document.getElementById('ads-decision-light') != null) {
                updatePrePassDecisionStatus(pre_pass_decision);
            }
            else {
                //Create ads health and status light if not exist in html
                $('.ads-decision-col').append(updatePrePassDecisionStatus(pre_pass_decision));
            }
        }
    });
}
