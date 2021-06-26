import * as Sentry from '@sentry/angular';
import {Severity} from '@sentry/angular';
import {Integrations} from '@sentry/tracing';
import * as MD5 from 'crypto-js/md5';

Sentry.init({
  dsn: 'https://8c9aa4c680c34e6da48464ec6d434ac5@o460992.ingest.sentry.io/5835126',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', 'https://sprimera.herokuapp.com'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ]
});

export class FeedbackService {

  constructor() { }

  submitFeedback(feedback: any): void {

    const jsonString = JSON.stringify(feedback, null, 2);
    const response: Error = {
      name: 'SprimeraFeedback',
      message: 'SprimeraFeedback',
      stack: jsonString
    };

    Sentry.configureScope(scope => {
      scope.setTag('app_name', 'sprimera-ui');
      scope.setTag('use-case', 'feedback');
      scope.setTag('hash', MD5(jsonString).toString());
      scope.setLevel(Severity.Info);

      scope.addEventProcessor(event => {
        event.sdk = {
          ...event.sdk,
          name: 'sentry.sprimera-ui.angular',
          version: Sentry.SDK_VERSION,
        };
        return event;
      });
    });
    Sentry.captureException(response);
  }
}
