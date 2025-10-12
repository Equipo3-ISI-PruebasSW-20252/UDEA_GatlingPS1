var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "752",
        "ok": "752",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7976",
        "ok": "7976",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3153",
        "ok": "3153",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2545",
        "ok": "2545",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4108",
        "ok": "4108",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7919",
        "ok": "7919",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7961",
        "ok": "7961",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 89,
    "percentage": 45
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.222",
        "ko": "-"
    }
},
contents: {
"req_payment-f83c2": {
        type: "REQUEST",
        name: "payment",
path: "payment",
pathFormatted: "req_payment-f83c2",
stats: {
    "name": "payment",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "752",
        "ok": "752",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7976",
        "ok": "7976",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3153",
        "ok": "3153",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2545",
        "ok": "2545",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4108",
        "ok": "4108",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7919",
        "ok": "7919",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7961",
        "ok": "7961",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 89,
    "percentage": 45
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.222",
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
