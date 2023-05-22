import { useParams } from 'react-router-dom';

export const IssueDetail = () => {
  const { id } = useParams();
  return <div>이슈 상세 페이지</div>;
};
