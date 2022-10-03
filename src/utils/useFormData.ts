export function useFormData(initialData: {}) {

  let data = initialData;
  function setData(newData: Record<string, string>): void {
    data = {...newData};
    console.log(data);
  };

  return [data, setData];
}
