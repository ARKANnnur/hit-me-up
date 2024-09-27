import Sidebar from "./component/Sidebar";
import Form from "./component/Form";
import Error from "./component/Error";

function App() {
  return (
    <div className="h-dvh w-dvw gap-5 bg-dark-200 p-2 sm:px-3 sm:py-4 lg:flex">
      <Error />
      <Sidebar />
      <Form />
    </div>
  );
}

export default App;
