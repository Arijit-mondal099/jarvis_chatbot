import { Chat } from "@/components/Chat";
import InputButton from "@/components/InputButton";

const HomePage = async () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto px-2 pt-6">
        <Chat />
      </div>

      <InputButton />
    </>
  );
};

export default HomePage;
