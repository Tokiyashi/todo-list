import {useTranslation} from "react-i18next";
import RoundedButton from "../../common/styles/RoundedButton.ts";
import {useAppDispatch, useAppSelector} from "@/utils/hooks/store.ts";
import {addNewTodo} from "@/utils/store/slices/todosSlices.ts";
import Container from "./styles/Container.ts";
import {TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";

const AddNewItem = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.user)
  const [text, setText] = useState('')

  async function handleAddTodo() {
    dispatch(addNewTodo({text, userId: user?.id || ''}))
  }

  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <Container>
      <TextField value={text} onChange={handleTextChange} variant='standard'/>
      <RoundedButton onClick={handleAddTodo} variant='contained'>
        {t('Add ')}
      </RoundedButton>
    </Container>
  );
};

export default AddNewItem;