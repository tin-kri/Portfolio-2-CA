import { useShare } from "../hooks/useShare";
import { Share2 } from "lucide-react";



export default function ShareButton() {
  const { share, copied } = useShare();
  function handleClick() {
    share();
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex gap-2 items-center bg-sage shadow-md px-6 py-2 font-mono text-sm  text-neutral-white hover:bg-sage/75 hover:shadow-xl active:bg-sage/95"
    >
      <Share2 size={15} />
      {copied ? "link copied" : "share"}
    </button>
  );
}
