import { useConverstations } from "../context/ConverstationsContext";

export default function Error() {
  const { error, closeError } = useConverstations();

  return (
    <>
      {error && (
        <div className="fixed z-10 mt-12 flex h-dvh w-dvw justify-center">
          <div className="bg-dark-400 flex h-40 w-72 flex-col border-2 border-light-50 border-b-dark-50/50 border-r-dark-50/50 ring-2 ring-dark-200">
            <div className="relative flex h-8 w-full items-center justify-end bg-light-200 p-1">
              <button
                onClick={() => closeError()}
                className="border-out-mini hover:border-in-mini h-full bg-dark-200 px-2 text-[0.5rem] text-red-700 transition-all duration-200"
              >
                X
              </button>
            </div>
            <div className="h-auto w-full grow pt-5 text-center text-xs font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
