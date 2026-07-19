'use client';

import { motion } from 'framer-motion';
import { Fragment, useLayoutEffect, useRef, useState } from 'react';

import { ArchitectureDiagramProps } from '@/types/about/architecture/architecture.diagram.type';
import '../../../styles/components/about/architecture/ArchitectureDiagram.scss';

const ArchitectureDiagram = ({
  nodes,
  connections,
}: ArchitectureDiagramProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement>>({});

  const [paths, setPaths] = useState<string[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current?.getBoundingClientRect();

    const generatePaths: string[] = [];

    connections.forEach((connection) => {
      const from = nodeRefs.current[connection.from];

      const to = nodeRefs.current[connection.to];

      if (!from || !to) return;

      const fromRect = from.getBoundingClientRect();

      const toRect = to.getBoundingClientRect();

      const startX = fromRect.left - container.left + fromRect.width / 2;

      const startY = fromRect.top - container.top + fromRect.height;

      const endX = toRect.left - container.left + toRect.width / 2;

      const endY = toRect.top - container.top;

      const controlY = (startY + endX) / 2;

      generatePaths.push(
        `
            M ${startX} ${startY}
            C
            ${startX} ${controlY},
            ${endX} ${controlY},
            ${endX} ${endY}
          `,
      );
    });

    setPaths(generatePaths);
  }, [connections]);

  return (
    <div ref={containerRef} className='architecture-diagram'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 1000 700'
        preserveAspectRatio='none'
        className='architecture-diagram__connections'
      >
        {paths.map((path, index) => (
          <Fragment key={index}>
            <path d={path} className='architecture-diagram__glow' />
            <path d={path} className='architecture-diagram__path' />
          </Fragment>
        ))}
      </svg>

      <div className='architecture-diagram__grid'>
        {nodes.map((node) => {
          const { id, label, accentColor } = node;

          return (
            <motion.div
              key={id}
              ref={(el) => {
                if (el) {
                  nodeRefs.current[id] = el;
                }
              }}
              className={`architecture-diagram__node ${id}`}
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span className='architecture-diagram__node--label'>{label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
