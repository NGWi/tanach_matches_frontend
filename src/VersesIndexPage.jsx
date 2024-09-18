import { useLoaderData, useNavigate } from 'react-router-dom';
import { VersesIndex } from './VersesIndex';

export function VersesIndexPage() {
  const verses = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (verse) => {
    navigate(`/verses/${verse.id}`);
  };

  return (
    <div>
      <VersesIndex verses={verses} onShow={handleShow} />
    </div>
  );
};