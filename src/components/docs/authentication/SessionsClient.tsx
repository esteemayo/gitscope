'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/authentication/sessions.data';
import '../../../styles/components/docs/authentication/SessionsClient.scss';

const SessionsClient = () => {
  return (
    <main className='sessions-client'>
      <DocsArticle
        category='Authentication'
        title='Sessions'
        description='Understand how GitScope maintains authenticated access after GitHub authorization.'
        previous={{
          title: 'Permissions',
          href: '/documentation/authentication/permissions',
        }}
        next={{
          title: 'Privacy',
          href: '/documentation/authentication/privacy',
        }}
      >
        <div className='sessions'>
          <section id='overview'>
            <h2>Overview</h2>

            <p>
              A session represents the authenticated state between you and
              GitScope after you sign in with GitHub. It allows GitScope to
              recognize that you have already completed authentication while you
              use protected features.
            </p>

            <DocsCallout type='note'>
              A session is different from the GitHub authorization itself.
              GitHub handles authorization, while GitScope uses an application
              session to maintain your signed-in state.
            </DocsCallout>
          </section>

          <section id='what-is-a-session'>
            <h2>What is a session?</h2>

            <p>
              A session is the application-level state that tells GitScope
              whether a user is currently authenticated. It connects the
              authenticated browser session with the account recognized by
              GitScope.
            </p>

            <div className='sessions-client__grid'>
              {data.sessionCards.map((card) => (
                <DocsFeatureCard key={card.title} {...card} />
              ))}
            </div>
          </section>

          <section id='session-lifecycle'>
            <h2>Session lifecycle</h2>

            <p>
              A session normally moves through several stages during an
              authenticated interaction with GitScope.
            </p>

            <div className='sessions-client__grid'>
              {data.sessionStages.map((stage) => (
                <DocsFeatureCard key={stage.title} {...stage} />
              ))}
            </div>
          </section>

          <section id='after-authentication'>
            <h2>After authentication</h2>

            <p>
              After GitHub authentication succeeds, GitScope can recognize the
              authenticated state when you navigate through the application.
              This avoids requiring a new authentication flow for every
              protected interaction.
            </p>

            <p>
              The exact behavior depends on the authentication implementation
              and the session mechanism used by the application.
            </p>
          </section>

          <section id='session-state'>
            <h2>Session state</h2>

            <p>
              GitScope can be understood as having three broad session states.
              The exact internal representation is an implementation detail.
            </p>

            <div className='sessions-client__list'>
              {data.sessionStates.map((state) => (
                <DocsFeatureItem key={state.title} {...state} />
              ))}
            </div>
          </section>

          <section id='session-expiration'>
            <h2>Session expiration</h2>

            <p>
              Sessions are not necessarily permanent. Depending on the
              authentication configuration, a session can become unavailable
              after expiration, invalidation, sign out, or another
              authentication state change.
            </p>

            <DocsCallout type='warning'>
              GitScope documentation does not define a fixed session duration
              here. Avoid relying on a specific expiration period unless it is
              explicitly provided by the current authentication configuration.
            </DocsCallout>
          </section>

          <section id='signing-out'>
            <h2>Signing out</h2>

            <p>
              Signing out ends the current authenticated application state. This
              is useful when you are finished using protected features or when
              you are using a shared device.
            </p>

            <div className='sessions-client__list'>
              {data.sessionSignOut.map((item) => (
                <DocsFeatureItem key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id='invalid-or-unavailable-sessions'>
            <h2>Invalid or unavailable sessions</h2>

            <p>
              A session may become invalid or unavailable. When that happens,
              protected features may no longer be accessible until
              authentication is restored.
            </p>

            <div className='sessions-client__grid'>
              {data.invalidSessions.map((session) => (
                <DocsFeatureCard key={session.title} {...session} />
              ))}
            </div>
          </section>

          <section id='security-considerations'>
            <h2>Security considerations</h2>

            <p>
              Sessions are part of the application&apos;s authentication
              boundary. Their purpose is to maintain authenticated state without
              requiring credentials to be repeatedly submitted.
            </p>

            <div className='sessions-client__list'>
              {data.securityPrinciples.map((principle) => (
                <DocsFeatureItem key={principle.title} {...principle} />
              ))}
            </div>
          </section>

          <section id='privacy-and-sessions'>
            <h2>Privacy and sessions</h2>

            <p>
              Authentication sessions should be treated as part of your private
              application state. GitScope should only use session information
              for the authentication and authorization behavior required by the
              application.
            </p>

            <p>
              For information about how authentication-related data is handled,
              see the GitScope privacy documentation.
            </p>

            <DocsCallout type='tip'>
              Review the Privacy documentation before granting GitHub access if
              you want to understand how authentication and application data
              relate to privacy.
            </DocsCallout>
          </section>

          <section id='next-steps'>
            <h2>Next steps</h2>

            <p>
              Now that you understand sessions, continue with permissions to
              learn how GitHub authorization determines the access available to
              GitScope.
            </p>
          </section>
        </div>
      </DocsArticle>
    </main>
  );
};

export default SessionsClient;
