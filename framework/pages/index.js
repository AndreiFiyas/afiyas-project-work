import SitesOperations from './sitesPage';
import DomainOperations from './domainPage';
import RegisterPage from './registrationPage';

const app = () => ({
    SitesOperations: () => ({...SitesOperations}),
    DomainOperations: () => ({...DomainOperations}),
    RegisterPage: () => ({...RegisterPage})
})

export default app;