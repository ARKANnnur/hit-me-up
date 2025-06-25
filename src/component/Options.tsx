import { useConverstations } from "../context/ConverstationsContext";
import Button from "./Button";

export default function Options() {
  const { ai, sideBar, setAi, setSideBar } = useConverstations();
  const notAvailable = "line-through text-red-500 cursor-not-allowed";

  return (
    <div className="flex">
      <Button custom="space-y-2 lg:hidden" onClick={() => setSideBar(!sideBar)}>
        <div className="h-[2px] w-5 bg-dark-50" />
        <div className="h-[2px] w-5 bg-dark-50" />
        <div className="h-[2px] w-5 bg-dark-50" />
      </Button>
      <div className="flex overflow-x-auto">
        <Button
          onClick={() => setAi("chatgpt")}
          active={ai === "chatgpt"}
          disabled
        >
          <p className={notAvailable}>Chat Gpt</p>
        </Button>
        <Button onClick={() => setAi("gemini")} active={ai === "gemini"}>
          <p>Gemini</p>
        </Button>
        <Button
          onClick={() => setAi("chatgpt")}
          active={ai === "chatgpt"}
          disabled
        >
          <p className={notAvailable}>DeepSeek</p>
        </Button>
      </div>
    </div>
  );
}
