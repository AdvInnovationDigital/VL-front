const ProcessComponent = ({ process }: { process: any }) => {
  return (
    <div className="w-56 py-10 bg-white rounded-md shadow-lg flex flex-col">
      <span>{process.name} </span>
      <span>{process.startDate} </span>
      <span>{process.endDate} </span>
      <div>
        <span>N de documentos nesse processo: {process.docsCount}</span>
      </div>
      <div>
        <span>{process.status.name}</span>
      </div>

      <div>
        <span>Visualizar documentos</span>
      </div>
    </div>
  );
};

export { ProcessComponent };
