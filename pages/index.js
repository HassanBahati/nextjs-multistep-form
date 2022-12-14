import Head from "next/head";
import Step from "../components/Step";
import Stepper from "../components/Stepper/index";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen flex flex-row items-center justify-start">
       
          <Stepper />
          <Step />
   
      </div>
    </div>
  );
}
