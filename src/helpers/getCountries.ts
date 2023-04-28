export const getCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export const getCountriesByInput = (input: string, data: never[]) => {
  if (typeof input === "string" && input.length > 0) {
    return data.filter((country: { name: { common: string } }) => {
      return country.name.common.toLowerCase().includes(input.toLowerCase());
    });
  } else return data;
};

export const getCountriesByRegion = (region: string, data: never[]) => {
  if (typeof region === "string" && region.length > 0) {
    return data.filter((country: { region: string }) => {
      return country.region.toLowerCase().includes(region.toLowerCase());
    });
  } else return data;
};
