import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

type Props = {
  setSearchCountry: (value: string) => void;
};

export const Search = ({ setSearchCountry }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    const searchCountryURL = searchParams.get("search") || "";
    setInputValue(searchCountryURL);
    setSearchCountry(searchCountryURL);
  }, [search, setSearchCountry]);

  const debounceSearch = useCallback(
    debounce((currentValue: string) => {
      setSearchCountry(currentValue);
      navigate(`?search=${currentValue}`);
    }, 1500),
    [navigate, setSearchCountry]
  );

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    debounceSearch(currentValue);
    setInputValue(currentValue);
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={onChangeValue} />
    </form>
  );
};
