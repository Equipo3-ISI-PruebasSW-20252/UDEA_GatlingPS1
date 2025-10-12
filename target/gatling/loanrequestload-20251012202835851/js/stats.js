var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150",
        "ok": "150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1892",
        "ok": "1892",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4727",
        "ok": "4727",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3000",
        "ok": "3000",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1050",
        "ok": "1050",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2369",
        "ok": "2369",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4445",
        "ok": "4445",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4668",
        "ok": "4668",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4716",
        "ok": "4716",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 150,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    }
},
contents: {
"req_request-loan-154e8": {
        type: "REQUEST",
        name: "request_loan",
path: "request_loan",
pathFormatted: "req_request-loan-154e8",
stats: {
    "name": "request_loan",
    "numberOfRequests": {
        "total": "150",
        "ok": "150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1892",
        "ok": "1892",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4727",
        "ok": "4727",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3000",
        "ok": "3000",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1050",
        "ok": "1050",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2369",
        "ok": "2369",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4445",
        "ok": "4445",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4668",
        "ok": "4668",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4716",
        "ok": "4716",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 150,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "30",
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
