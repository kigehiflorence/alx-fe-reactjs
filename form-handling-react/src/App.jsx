import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 bg-gray-200">
      {/* Render both forms */}
      <FormikForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
