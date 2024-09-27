import { useConverstations } from "../context/ConverstationsContext";
import Button from "./Button";
type Title = {
  title: string;
};

export default function Sidebar() {
  const { sideBar, data, topic, setTopic, deleteChat } = useConverstations();

  return (
    <div
      className={`${sideBar ? "fixed top-16 flex" : "hidden"} h-auto w-1/3 flex-col bg-light-50 lg:relative lg:top-0 lg:flex lg:bg-light-50/85`}
    >
      <Button
        custom="flex items-center justify-between w-full text-xs"
        onClick={() => setTopic("")}
      >
        <p>New Chat</p>
        <p>+</p>
      </Button>
      <div className="lg:border-in-l w-full grow border-4 border-l-0 border-t-0 border-dark-200">
        <ul className="space-y-5 p-5">
          {data.length > 0 &&
            data?.map((item: Title) => (
              <li
                key={item.title}
                className={`text-xs ${item.title === topic ? "text-dark-50" : "text-light-200"} flex cursor-pointer items-center justify-between underline`}
              >
                <button onClick={() => setTopic(item.title)}>
                  {item.title}
                </button>
                <button
                  className="border-out-mini hover:border-in-mini px-1 text-[0.5rem] text-red-700 transition-all duration-200"
                  onClick={() => deleteChat(item.title)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
