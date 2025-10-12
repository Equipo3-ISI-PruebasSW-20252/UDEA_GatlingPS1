package parabank.transaction

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

import parabank.Data._

class TransferLoadSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl(url)
    .acceptHeader("application/json")

  // Feeder desde CSV
  val csvFeeder = csv("transferData.csv").circular

  val transfer = feed(csvFeeder)
    .exec(
      http("Transfer")
        .post("/transfer")
        .queryParam("fromAccountId", "${fromAccountId}")
        .queryParam("toAccountId", "${toAccountId}")
        .queryParam("amount", "${amount}")
        .check(status.is(200))
    )

  val scn = scenario("Carga de Transferencias sin Login")
    .exec(transfer)

  setUp(
    scn.inject(
      constantUsersPerSec(150).during(15.seconds)
    )
  ).protocols(httpProtocol)
   .assertions(global.successfulRequests.percent.is(100))
}
