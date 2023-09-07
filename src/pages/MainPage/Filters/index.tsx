import {Button} from "@mui/material";
import Container from "./styles/Container";
import {useTranslation} from "react-i18next";
import {Filter} from "@/common/enums/filters";

const filterButtons = Object.values(Filter)

type Props = {
  value: Filter;
  onChange: (value: Filter) => void;
}

const Filters = ({value, onChange}: Props) => {
  const {t} = useTranslation();

  return (
    <Container>
      {filterButtons.map(item =>
        <Button variant={value === item ? 'contained' : 'outlined'} key={item} onClick={() => onChange(item)}>
          {t(item)}
        </Button>)}
    </Container>
  );
};

export default Filters;