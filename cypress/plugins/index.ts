import {cypressTask} from '@/cypress/plugins/tasks';

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  on('task', {
    cypressTask,
  });

  return config;
};
