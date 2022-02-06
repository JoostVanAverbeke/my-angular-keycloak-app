import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9001/auth',
        realm: 'spring-security-example',
        clientId: 'my-angular-keycloak-app',
      }
    });
}
