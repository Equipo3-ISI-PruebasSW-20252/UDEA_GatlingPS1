package parabank.login

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import parabank.login.LoginData._
import parabank.Data._
import parabank.login.LoginData._

class LoginPeakLoad extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("Login").
    exec(http("login")
      .get(s"/login/$username/$password")
       //Recibir información de la cuenta
      .check(status.is(200))
    )

  // 3 Load Scenario
  //validate response time for peak load with 200 users  
    setUp(
    scn.inject(atOnceUsers(200))
  ).protocols(httpConf)
  .assertions(global.responseTime.max.lt(10000))
}
