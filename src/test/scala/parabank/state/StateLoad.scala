package parabank.state

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import parabank.Data._
import parabank.state.StatesData._

class StateLoad extends Simulation {
    val httpProtocol = http
        .baseUrl(url)
        .acceptHeader("application/json")
    
    val state = exec(
        http("Accounts")
        .get(s"/accounts/$accountId")
        .check(
            status.is(200)
        )
    )
    
    val scn = scenario("Carga de Estados de cuentas")  
        .exec(state)
    
    setUp(
        scn.inject(
        atOnceUsers(200) // 200 usuarios simultáneos
        )
    ).protocols(httpProtocol)
    .assertions(global.successfulRequests.percent.gt(99)) // Validar el porcentaje de solicitudes exitosas
    .assertions(global.responseTime.max.lt(3000)) // Validar el tiempo de respuesta máximo
}