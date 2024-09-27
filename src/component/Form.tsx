/* eslint-disable @typescript-eslint/no-explicit-any */
import { useConverstations } from "../context/ConverstationsContext";
import Input from "./Input";
import Options from "./Options";

type Converstation = {
  you: string;
  computer: string;
};

export default function Form() {
  const { data, topic } = useConverstations();
  const converstation =
    data?.find((item: any) => item.title === topic)?.conversation ?? [];

  return (
    <div className="flex h-full w-full flex-col lg:w-2/3">
      <Options />
      <div className="border-in h-[80%] w-full overflow-y-scroll bg-light-50/85">
        <ul className="space-y-1 px-5 pt-5">
          {data.length > 0 &&
            converstation?.map((item: Converstation) => (
              <li key={item.you} className="space-y-1 text-xs">
                <div className="text-right">
                  <p className="text-light-200">&lt;you&gt;</p>
                  <p>{item.you}</p>
                </div>
                <div className="">
                  <p className="text-dark-100">&lt;computer&gt;</p>
                  <p>{item.computer}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Input />
    </div>
  );
}
