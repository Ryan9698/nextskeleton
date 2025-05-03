import Image from "next/image";
import { DeviceWidth } from "./components";

export default function Home() {
  return (
    <div>
      <DeviceWidth />
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
}
