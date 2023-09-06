import {useTranslation} from "react-i18next";
import RoundedButton from "../../common/styles/RoundedButton.ts";
import {useAppDispatch} from "@/utils/hooks/store.ts";
import {addNewTodo} from "@/utils/store/slices/todosSlices.ts";

const AddNewItem = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch();

  async function handleAddTodo() {
    dispatch(addNewTodo({text: 'dispatch', completed: false}))
  }

  return (
    <RoundedButton onClick={handleAddTodo} variant='contained'>
      {t('Add new Todo')}
    </RoundedButton>
  );
};

export default AddNewItem;