var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "728",
        "ok": "728",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1853",
        "ok": "1853",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles1": {
        "total": "885",
        "ok": "885",
        "ko": "-"
    },
    "percentiles2": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1821",
        "ok": "1821",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1838",
        "ok": "1838",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70,
    "percentage": 70
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
},
contents: {
"req_login-d56b6": {
        type: "REQUEST",
        name: "login",
path: "login",
pathFormatted: "req_login-d56b6",
stats: {
    "name": "login",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "728",
        "ok": "728",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1853",
        "ok": "1853",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles1": {
        "total": "885",
        "ok": "885",
        "ko": "-"
    },
    "percentiles2": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1821",
        "ok": "1821",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1838",
        "ok": "1838",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70,
    "percentage": 70
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
