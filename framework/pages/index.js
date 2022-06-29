import RegisterPage from "./registrationPage";
import DomainOperations from "./domainPage";
import SitesOperations from "./sitesPage";
import LoginPage from "./loginPage";
const app = () => ({
    RegisterPage: () => ({...RegisterPage}),
    DomainOperations: () => ({...DomainOperations}),
    SitesOperations: () => ({...SitesOperations}),
    LoginPage: () => ({...LoginPage})

})



export default app;