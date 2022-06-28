import RegisterPage from "./registrationPage";
import DomainOperations from "./domainPage";
import SitesOperations from "./sitesPage";
const app = () => ({
    RegisterPage: () => ({...RegisterPage}),
    DomainOperations: () => ({...DomainOperations}),
    SitesOperations: () => ({...SitesOperations})

})



export default app;