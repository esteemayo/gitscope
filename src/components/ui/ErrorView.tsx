import { ErrorViewProps } from '@/types/error.view.type';
import '../../styles/components/ErrorView.scss';

const ErrorView = ({
  code,
  title,
  description,
  primaryAction,
  meta,
}: ErrorViewProps) => {
  const titleId = 'error-view-title';
  const descId = 'error-view-description';

  return (
    <section
      className='error-view'
      aria-labelledby={titleId}
      aria-describedby={descId}
      role='alert'
    >
      <div className='error-view__container'>
        {code && (
          <span
            className='error-view__code'
            aria-label={`Error code ${code}`}
          >
            {code}
          </span>
        )}

        <h1 id={titleId} className='error-view__title'>
          {title}
        </h1>

        <p id={descId} className='error-view__desc'>{description}</p>

        {primaryAction && (
          <div className='error-view__action' role='group' aria-label='Error actions'>
            {primaryAction && (
              <button
                type='button'
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </button>
            )}

            {/* {secondaryAction && (
              <button
                type='button'
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </button>
            )}

            {tertiaryAction && (
              <button
                type='button'
                onClick={tertiaryAction.onClick}
              >
                {tertiaryAction.label}
              </button>
            )} */}
          </div>
        )}

        {meta && <span className='error-view__meta'>{meta}</span>}
      </div>
    </section>
  )
}

export default ErrorView;
