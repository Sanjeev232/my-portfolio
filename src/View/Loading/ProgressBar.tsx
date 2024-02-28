import { useEffect } from "react";

interface ProgressBarProps {
  progressBarValue: number;
  setProgressBarValue: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarValue,
  setProgressBarValue,
}) => {
  useEffect(() => {
    const barInterval = setInterval(() => {
      setProgressBarValue((prevVal) => Math.min(100, prevVal + 1));
    }, 50);

    return () => {
      clearInterval(barInterval);
    };
  }, []);

  const customStyle = {
    color: progressBarValue > 50 ? "#020c1b" : "#64ffda",
    width: `${progressBarValue}%`,
  };

  return (
    <div className="progressbar-container">
      <span style={{ color: customStyle.color }}>
        {progressBarValue.toFixed()}%
      </span>
      <div style={{ width: customStyle.width }} />
    </div>
  );
};

export default ProgressBar;
