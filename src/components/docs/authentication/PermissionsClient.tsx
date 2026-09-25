'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/authentication/permissions.data';
import '../../../styles/components/docs/authentication/PermissionsClient.scss';

const PermissionsClient = () => {
  return (
    <main className='permissions-client'>
      <DocsArticle
        category='Authentication'
        title='Permissions'
        description='Understand how GitHub permissions control the data and account capabilities available to authenticated GitScope features.'
        previous={{
          title: 'GitHub Authentication',
          href: '/documentation/authentication',
        }}
        next={{
          title: 'Sessions',
          href: '/documentation/authentication/sessions',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            Permissions define what an application is allowed to access after
            you authorize it with GitHub.
          </p>

          <p>
            GitScope uses permissions as part of its authenticated experience.
            The available capabilities depend on the access granted during the
            GitHub authorization flow.
          </p>
        </section>

        <section id='authentication-vs-permissions'>
          <h2>Authentication vs permissions</h2>

          <p>
            Authentication confirms the account participating in the sign-in
            flow. Permissions determine what that authenticated application can
            access or perform.
          </p>

          <div className='permissions-client__grid'>
            {data.authenticationPermissions.map((permission) => (
              <DocsFeatureCard key={permission.title} {...permission} />
            ))}
          </div>
        </section>

        <section id='permission-scope'>
          <h2>Permission scope</h2>

          <p>
            Permission scope determines the boundaries of an application&apos;s
            access. GitScope should only use access required for the
            authenticated features it provides.
          </p>

          <div className='permissions-client__items'>
            {data.permissionScopes.map((scope) => (
              <DocsFeatureItem key={scope.title} {...scope} />
            ))}
          </div>
        </section>

        <section id='github_authorization'>
          <h2>GitHub authorization</h2>

          <p>
            Permissions are presented as part of the GitHub authorization
            process. You can review the access requested before completing the
            authorization flow.
          </p>

          <DocsCallout type='note'>
            GitScope does not receive unrestricted access to your GitHub account
            simply because you sign in. Access is governed by the permissions
            granted through GitHub.
          </DocsCallout>
        </section>

        <section id='data-access'>
          <h2>Data access</h2>

          <p>
            Authenticated GitScope features may require access to GitHub data
            associated with the connected account.
          </p>

          <div className='permissions-client__grid'>
            {data.permissionDataAccess.map((access) => (
              <DocsFeatureCard key={access.title} {...access} />
            ))}
          </div>
        </section>

        <section id='permission-changes'>
          <h2>Permission changes</h2>

          <p>
            Permission requirements can change when an application introduces
            functionality that requires additional GitHub access.
          </p>

          <p>
            When GitHub requires updated authorization, the authentication flow
            can be used to review and approve the applicable access.
          </p>

          <div className='permissions-client__items'>
            {data.permissionChanges.map((change) => (
              <DocsFeatureItem key={change.title} {...change} />
            ))}
          </div>
        </section>

        <section id='managing-access'>
          <h2>Managing access</h2>

          <p>
            GitHub provides account-level controls for reviewing and managing
            applications that have been authorized to access the account.
          </p>

          <p>
            If you no longer want an application to have access, review the
            application authorization controls available through your GitHub
            account.
          </p>

          <DocsCallout type='warning'>
            Revoking application access through GitHub can affect authenticated
            GitScope features that depend on that authorization.
          </DocsCallout>
        </section>

        <section id='least-privilege-access'>
          <h2>Least-privilege access</h2>

          <p>
            Least privilege means granting only the access necessary for an
            application to perform its intended functions.
          </p>

          <div className='permissions-client__items'>
            {data.leastPrivilegeAccess.map((access) => (
              <DocsFeatureItem key={access.title} {...access} />
            ))}
          </div>
        </section>

        <section id='privacy-and-permissions'>
          <h2>Privacy and permissions</h2>

          <p>
            Permissions determine what GitScope can access through GitHub.
            Privacy documentation explains how information handled by the
            application is treated.
          </p>

          <p>
            These concepts should be considered together when reviewing the
            authenticated GitScope experience.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with Sessions to understand how GitScope maintains an
            authenticated user session after GitHub authorization.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default PermissionsClient;
