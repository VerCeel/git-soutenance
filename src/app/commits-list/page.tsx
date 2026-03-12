import CommitList from "@/components/CommitList";

const pages = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <h1>Commit List:</h1>
      <div className="text-white">
        <CommitList />
      </div>
    </div>
  );
};

export default pages;
