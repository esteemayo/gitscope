import { ArchitectureFeature, DiagramConnection, DiagramNode } from '../index';

export interface ArchitectureProps {
  badge: string;
  title: string;
  description: string;
  features: ArchitectureFeature[];
  diagramNodes: DiagramNode[];
  diagramConnections: DiagramConnection[];
}
