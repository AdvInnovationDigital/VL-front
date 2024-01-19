import Link from "next/link";
import { useRouter } from "next/router";

const ProcessComponent = ({ process }: { process: any }) => {
  const date = new Date(process.startDate);
  const router = useRouter();

  const handleNavigate = (e: any) => {
    console.log(router.route);
    router.push(`/processos/${process.id}/documentos`);
  };

  return (
    <div className="w-64 pt-10 pb-6 bg-white rounded-md shadow-md flex flex-col">
      <span className="font-semibold text-center">{process.name} </span>
      {/* <span>
        {date.getDate() +
          "/" +
          JSON.stringify(date.getMonth() + 1).padStart(2, "0") +
          "/" +
          date.getFullYear()}
      </span> */}
      {/* <span>{process.endDate} </span>
      <div>
        <span>N de documentos nesse processo: {process.docsCount}</span>
      </div> */}
      <div className="flex items-center justify-center gap-2 ">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "limegreen" }}
        ></div>
        <span>{process.status.name}</span>
      </div>

      <div className="flex justify-center items-center mt-2 ">
        <a href="#" onClick={handleNavigate} className="cursor-pointer">
          <span>Visualizar Visual Docs</span>
        </a>
      </div>
    </div>
  );
};

export { ProcessComponent };
