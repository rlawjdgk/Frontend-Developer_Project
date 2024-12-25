import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  .todoInput {
    border: none;
    border-bottom: 1px solid #b0cea2;
    background: #f4f7ee;
    padding: 8px;
    outline: none;
    &::placeholder {
      color: #7b9c58;
    }
  }
  .button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background: #b0cea2;
  }
`;

interface Form {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<Form>();
  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Todo List",
        })}
        type="text"
        placeholder="오늘의 할일을 작성해주세요."
        className="todoInput"
      />
      <input type="submit" value={"ADD"} className="button" />
    </Form>
  );
};

export default CreateToDo;
