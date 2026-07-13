import { TimelinePreviewProps } from '@/types/about/features/previews/timeline.preview.type';
import '../../../../styles/components/about/features/previews/TimelinePreview.scss';

const TimelinePreview = ({ activities }: TimelinePreviewProps) => {
  return (
    <div className='timeline-preview'>
      <div className='timeline-preview__timeline'>
        {activities.map((activity) => {
          const { id, color, title, time } = activity;

          return (
            <article key={id} className='timeline-preview__item'>
              <div
                className='timeline-preview__dot'
                style={
                  {
                    '--dot-color': color,
                  } as React.CSSProperties
                }
              />

              <div className='timeline-preview__content'>
                <strong className='timeline-preview__content--title'>
                  {title}
                </strong>

                <small className='timeline-preview__content--time'>
                  {time}
                </small>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default TimelinePreview;
