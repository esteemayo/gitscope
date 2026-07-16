import { ArchitectureFeature } from '../index';

export interface ArchitectureProps {
  badge: string;
  title: string;
  description: string;
  features: ArchitectureFeature[];
}
