import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import Button from '../Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onLeaveFeedback={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
