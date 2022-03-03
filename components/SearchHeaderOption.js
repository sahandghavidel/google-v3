import { useRouter } from "next/router";

export default function SearchHeaderOption({ title, Icon, selected }) {
  const router = useRouter();
  function selectTab(title) {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  }
  return (
    <div
      onClick={()=>selectTab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
