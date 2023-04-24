import { ConnectKitButton } from "connectkit";
import { Caisson } from "./Caisson";

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Caisson />
      <ConnectKitButton />
    </div>
  );
}
