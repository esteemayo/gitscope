import {
  DisputeResolutionData,
  GoverningLawContent,
  JurisdictionPanelData,
  LegalPrincipleType,
} from '.';

export interface GoverningLawProps extends GoverningLawContent {
  jurisdiction: JurisdictionPanelData;
  principles: LegalPrincipleType[];
  disputeResolution: DisputeResolutionData;
  className?: string;
  style?: React.CSSProperties;
}
