import { useState, useRef } from "react";


const AIAnswerComponent = ({ question }) => {
  const [isSubmittingAI, setIsSubmittingAI] = useState(false);
  const editorRef = useRef(null);

  const generateAIAnswer = async () => {
    setIsSubmittingAI(true);

    try {
      const response = await fetch(
        `http://localhost:3000/api/chatgpt`,
        {
          method: "POST",
          body: JSON.stringify({ question }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiAnswer = await response.json();

      // Convert plain text to HTML format
      const formattedAnswer = aiAnswer.reply.replace(/\n/g, "<br />");

      if (editorRef.current) {
        const editor = editorRef.current; // Access your editor instance
        editor.setContent(formattedAnswer); // Set the AI-generated content
      }

      // Optionally show a toast or notification here
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmittingAI(false);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-5">
      <input type="text" placeholder="Enter your question here" />

      <button
        className="btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500"
        onClick={generateAIAnswer}
      >
        {isSubmittingAI ? (
          <>Generating...</>
        ) : (
          <>
            
            Generate AI Answer
          </>
        )}
        </button>
    </div>
  );
};

export default AIAnswerComponent;
