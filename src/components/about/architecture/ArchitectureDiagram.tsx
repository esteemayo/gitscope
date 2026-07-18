'use client';

import { useRef, useState } from 'react';
import { ArchitectureDiagramProps } from '@/types/about/architecture/architecture.diagram.type';

import '../../../styles/components/about/architecture/ArchitectureDiagram.scss';

const ArchitectureDiagram = ({
  nodes,
  connections,
}: ArchitectureDiagramProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement>>({});

  const [paths, setPaths] = useState<string[]>([]);

  return (
    <div className='architecture-diagram'>
      <svg
        viewBox='0 0 1000 700'
        preserveAspectRatio='none'
        className='architecture-diagram__connections'
      >
        {connections.map((connection) => {
          const { from, to } = connection;

          return <line key={`${from}-${to}`} x1='0' y1='0' x2='0' y2='0' />;
        })}
      </svg>

      <div className='architecture-diagram__grid'>
        {nodes.map((node) => {
          const { id, label, accentColor } = node;

          return (
            <div
              key={id}
              ref={(element) => {
                if (element) {
                  nodeRefs.current[id] = element;
                }
              }}
              className={`architecture-diagram__node ${id}`}
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
            >
              <span className='architecture-diagram__node--label'>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
