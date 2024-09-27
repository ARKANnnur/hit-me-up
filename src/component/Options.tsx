import { useConverstations } from "../context/ConverstationsContext";
import Button from "./Button";

export default function Options() {
  const { ai, sideBar, setAi, setSideBar } = useConverstations();

  return (
    <div className="flex">
      <Button custom="space-y-2 lg:hidden" onClick={() => setSideBar(!sideBar)}>
        <div className="h-[2px] w-5 bg-dark-50" />
        <div className="h-[2px] w-5 bg-dark-50" />
        <div className="h-[2px] w-5 bg-dark-50" />
      </Button>
      <Button onClick={() => setAi("chatgpt")} active={ai === "chatgpt"}>
        <p>Chat Gpt</p>
      </Button>
      <Button onClick={() => setAi("geminitext")} active={ai === "geminitext"}>
        <p>Gemini</p>
      </Button>
    </div>
  );
}
