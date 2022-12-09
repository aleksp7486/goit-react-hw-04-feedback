import { useState } from 'react';
import { Box } from 'components/Box';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(() => 0);
  const [neutral, setNeutral] = useState(() => 0);
  const [bad, setBad] = useState(() => 0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / (countTotalFeedback() / 100));
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="start"
      p="120px"
      m="0 auto"
      maxWidth="800px"
      height="100vh"
    >
      <Box p={4} bg="bg" border="4px solid #1b8cbc" borderRadius="8px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    </Box>
  );
}
