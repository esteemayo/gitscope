import { type Metadata } from 'next';
import ApiResponsesClient from '@/components/docs/api/ApiResponsesClient';

export const metadata: Metadata = {
  title: 'API Responses | GitScope Analytics Documentation',
  description: 'Understand the structure of API responses.',
};

const ApiResponsesPage = () => {
  return <ApiResponsesClient />;
};

export default ApiResponsesPage;
