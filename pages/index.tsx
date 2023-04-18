import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredFeedback = feedbackInputRef.current?.value;
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea rows={5} id="feedback" ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
