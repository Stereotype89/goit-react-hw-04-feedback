import PropTypes from 'prop-types';
import {
  Title,
  StatBox,
  StatItem,
  Item,
  TotalText,
  TotalVal,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <StatBox>
        <StatItem>
          Good:
          <Item> {good}</Item>
        </StatItem>
        <StatItem>
          Neutral:
          <Item> {neutral}</Item>
        </StatItem>
        <StatItem>
          Bad:
          <Item> {bad}</Item>
        </StatItem>
      </StatBox>
      <TotalText>
        Total: <TotalVal>{total}</TotalVal>
      </TotalText>
      <TotalText>
        Positive feedback:{' '}
        <TotalVal>{total ? positivePercentage : 0} %</TotalVal>
      </TotalText>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
