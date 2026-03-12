import BranchList from "@/components/BranchList";

export default function Home() {
  return (
    <div className="flex flex-col h-screen mt-30 px-10">
      <p className="text-white">Get list of commits for a specific branch</p>
      <div className="text-white">
         <BranchList />
      </div>
    </div>
  );
}
