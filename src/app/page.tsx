import BranchList from "@/components/BranchList";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <p className="text-white">Welcome to my project</p>
      <div className="text-white">
         <BranchList />
      </div>
    </div>
  );
}
