package parabank.loan

import scala.util.Random

object LoanData {
    val customerId = "12212"
    val fromAccountId = "13011"
    val amount = 1000 + scala.util.Random.nextInt(9000) // between 1000 and 10000
    val downPayment = 100 + scala.util.Random.nextInt(900) // between 100 and 1000
}
