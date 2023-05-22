import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

import { COLOR_CODE } from '@/constants';

interface Props {
  regions: string[];
}

export default function RegionFilter({ regions }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentRegion = searchParams.get('region');

  return (
    <FilterContainer>
      <Span>지역 선택:</Span>
      <div>
        <Button checked={!currentRegion} onClick={() => setSearchParams({})}>
          전체
        </Button>
        {regions.map((region) => (
          <Button
            checked={region === currentRegion}
            key={region}
            onClick={() => setSearchParams({ region })}>
            {region}
          </Button>
        ))}
      </div>
    </FilterContainer>
  );
}

const FilterContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '26px',
  button: {
    background: `${COLOR_CODE.lightGrey}`,
    padding: '10px 16px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
});

const Span = styled.div({
  fontSize: '16px',
  marginRight: '20px',
});

const Button = styled.button<{ checked: boolean }>({}, (props) => ({
  color: props.checked ? 'red' : 'black',
}));
