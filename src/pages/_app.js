import { CssBaseline } from '@mui/material';
import '../styles/globals.css'
import AppBarMenu from "../components/menuTop/AppBarMenu";
export default function App({ Component, pageProps }) {
  const { children, ...props } = pageProps
  return (
    <div >
      <CssBaseline />
      <AppBarMenu />
      <div>
        <Component {...props} />
      </div>
    </div>
  );
}
