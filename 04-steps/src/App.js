import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    //when we want to update state based on current state, it's best to use callback functions 👇
    if (step > 1) setStep((currStep) => currStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((currStep) => currStep + 1);
  }
  return (
    <>
      {/* <button className="close" onClick={() => setisOpen(!isOpen)}> */}
      <button className="close" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgcolor="#7950F2" textcolor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgcolor="#7950F2" textcolor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
// children prop -> helping components make resusable
function Button({ bgcolor, textcolor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div>
  );
}
