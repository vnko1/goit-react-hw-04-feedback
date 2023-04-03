import PropTypes from 'prop-types';
import { ButtonContainer, FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ onHandleClick, options }) => {
  return (
    <ButtonContainer>
      {options.map(option => {
        const text = option[0].toUpperCase() + option.slice(1, option.length);

        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onHandleClick(option)}
          >
            {text}
          </FeedbackButton>
        );
      })}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export { FeedbackOptions };
