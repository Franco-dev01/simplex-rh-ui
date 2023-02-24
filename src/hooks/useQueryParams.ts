import { useLocation } from 'react-router-dom';

const useQueryParams = (): URLSearchParams => new URLSearchParams(useLocation().search);

export default useQueryParams;
