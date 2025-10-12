package parabank.transaction

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

import parabank.transaction.DataTransaction._
import parabank.Data._

class TransferLoadSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl(url)
    .acceptHeader("application/json")

  val transfer = exec(
    http("Transfer")
      .post("/transfer")
      .queryParamMap(Map("fromAccountId" -> fromAccountId, "toAccountId" -> toAccountId, "amount" -> amount))
      .check(
        status.is(200)
      )
  )

  val scn = scenario("Carga de Transferencias sin Login")   
    .exec(transfer)

  setUp(
    scn.inject(
      constantUsersPerSec(150).during(15 seconds) // 150 users per second for 15 seconds
    )
  ).protocols(httpProtocol)
  .assertions(global.successfulRequests.percent.is(100)) // Validar el porcentaje de solicitudes exitosas
}
