import 'dotenv/config';
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on('task', {
        validateLiveSessions: ({ var1, var2 }) => {
          return var1 === var2;
        },
      });
    },
  },
  env: {
    CYPRESS_HOST: process.env.CYPRESS_HOST,
    API_URL_BASE: 'https://www.allbirds.com/account/login?return_url=%2Faccount',
    API_URL_STAGING: 'https://www.lladro.com/en_eu/customer/account/login/',
    EMAIL: 'LOGIFUTURE22@MAILINATOR.COM',
    EMAIL_STAGING: 'pantiliedaniel@gmail.com',
    PASS: 'Qwerty1234!',
  },
});