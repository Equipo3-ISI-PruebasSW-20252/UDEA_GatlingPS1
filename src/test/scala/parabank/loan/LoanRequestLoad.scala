package parabank.loan

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random
import parabank.loan.LoanData._
import parabank.Data._

class LoanRequestLoad extends Simulation {

  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    .check(status.is(200)) // Verify that the response status is 200

  val scn = scenario("Loan Request Under Load")
    .exec(
      http("request_loan")
        .post("/requestLoan")
        .queryParam("customerId", customerId)
        .queryParam("amount", amount)
        .queryParam("downPayment", downPayment)
        .queryParam("fromAccountId", fromAccountId)
        .check(status.is(200)) // Verify that the response status is 200
    )

  setUp(
    scn.inject(atOnceUsers(150)) // 150 simultaneous users
  ).protocols(httpConf)
    .assertions(
      global.responseTime.mean.lt(5000),        // response time mean < 5 seconds
      global.successfulRequests.percent.gte(98) // 98% of requests are successful
    )
}
