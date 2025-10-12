package parabank.payment

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import parabank.payment.PaymentData._

class Payment extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //verify the response status for all requests
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("make payments simultaneously").
    exec(http("payment")
      .post(s"/billpay?accountId=$accountId&amount=$amount")
      .body(StringBody(
        s"""
          |{
          |   "name": "$name",
          |   "address": {
          |    "street": "$street",
            |   "city": "$city",
            |   "state": "$state",
            |   "zipCode": "$zipCode"
            },
            |  "phoneNumber": "$phoneNumber",
            |  "accountNumber": "$accountNumber"
            |}
            |""".stripMargin)).asJson
       //gather information about the payment
      .check(status.is(200))
    )

    // 3 Load Scenario
  setUp(
    scn.inject(
      atOnceUsers(200) // Simulation of 200 users at once
    )
  ).protocols(httpConf)
   .assertions(
     global.responseTime.max.lte(3000),       // max response time ≤ 3s
     global.failedRequests.percent.lte(1)     // error rate ≤ 1%
   )
}