import "../styles/globals.css";
import { FormWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <FormWrapper>
      <Component {...pageProps} />
    </FormWrapper>
  );
}

export default MyApp;
