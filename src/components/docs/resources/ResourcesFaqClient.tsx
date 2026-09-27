'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/resources/faq.data';
import '../../../styles/components/docs/resources/ResourcesFaqClient.scss';

const ResourcesFaqClient = () => {
  return (
    <DocsArticle
      category='Resources'
      title='FAQ'
      description='Find answers to common questions about GitScope, its analytics, authentication, and documentation.'
      previous={{
        title: 'Errors',
        href: '/documentation/api/errors',
      }}
      next={{
        title: 'Changelog',
        href: '/documentation/resources/changelog',
      }}
    >
      <div className='resources-faq-client'>
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            The GitScope FAQ provides quick answers to common questions about
            the platform, GitHub analytics, authentication, and working with
            GitScope features.
          </p>

          <DocsCallout type='note'>
            For more detailed explanations, use the related documentation pages
            linked throughout the GitScope docs.
          </DocsCallout>
        </section>

        <section id='about-gitscope'>
          <h2>About GitScope</h2>

          <div className='resources-faq-client__grid'>
            {data.aboutGitScope.map((card) => (
              <DocsFeatureCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section id='analytics'>
          <h2>Analytics</h2>

          <div className='resources-faq-client__list'>
            {data.faqAnalytics.map((analytic) => (
              <DocsFeatureItem key={analytic.title} {...analytic} />
            ))}
          </div>
        </section>

        <section id='github-authentication'>
          <h2>GitHub authentication</h2>

          <div className='resources-faq-client__list'>
            {data.githubAuthentication.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='using-the-documentation'>
          <h2>Using the documentation</h2>

          <div className='resources-faq-client__grid'>
            {data.faqDocumentations.map((documentation) => (
              <DocsFeatureCard key={documentation.title} {...documentation} />
            ))}
          </div>
        </section>

        <section id='api-questions'>
          <h2>API questions</h2>

          <div className='resources-faq-client__list'>
            {data.apiQuestions.map((question) => (
              <DocsFeatureItem key={question.title} {...question} />
            ))}
          </div>
        </section>

        <section id='privacy-and-data'>
          <h2>Privacy and data</h2>

          <p>
            GitScope documentation distinguishes between public GitHub
            information, authenticated access, and application-specific
            functionality. Review the Privacy documentation for a more detailed
            explanation of authentication, data access, sessions, and privacy.
          </p>

          <DocsCallout type='tip'>
            When working with authenticated GitHub data, use only the access
            required for the functionality you need and keep authentication
            credentials secure.
          </DocsCallout>
        </section>

        <section id='still-have-a-question'>
          <h2>Still have a question?</h2>

          <p>
            If the documentation does not answer your question, review the
            relevant feature, guide, authentication, or API page for additional
            context. The documentation is organized so related concepts can be
            followed without leaving the current topic.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue to the Changelog to see how GitScope has evolved, including
            documented updates, improvements, and changes across the project.
          </p>
        </section>
      </div>
    </DocsArticle>
  );
};

export default ResourcesFaqClient;
