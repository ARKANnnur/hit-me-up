import { useConverstations } from "../context/ConverstationsContext";
import Button from "./Button";

export default function Input() {
  const { loading, ai, message, setMessage, fetchResponse } =
    useConverstations();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.length > 3) {
      await fetchResponse(`https://mr-apis.com/api/ai/${ai}?prompt=${message}`);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-5 flex w-full grow flex-col gap-2 lg:flex-row"
    >
      <input
        type="text"
        className="border-in h-full w-full text-xs"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button custom="self-end grow-0 lg:h-full" disabled={loading}>
        {loading ? <div className="loader"></div> : "Enter"}
      </Button>
    </form>
  );
}
