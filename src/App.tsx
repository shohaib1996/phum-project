import Mainlayout from "./components/layout/Mainlayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <Mainlayout />
    </ProtectedRoute>
  );
}

export default App;
