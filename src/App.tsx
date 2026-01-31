import AppRouter from "@/Configurations/Routing/AppRouter";
import { SnackbarProvider } from 'notistack';

const App = () => (
  <div className="overflow-x-hidden w-full">
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={3000}>
      <AppRouter />
    </SnackbarProvider>
  </div>
);

export default App;
