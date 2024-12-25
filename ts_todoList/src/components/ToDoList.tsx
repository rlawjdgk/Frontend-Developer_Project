import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, categoryState, Categories } from "../atoms";
import ToDo from "./ToDo";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 20px;
  background: #f4f7ee;
`;

const Box = styled.div`
  width: 30%;

  .select {
    border: none;
    outline: none;
    background: #f4f7ee;
    color: #7b9c58;
    font-size: 16px;
    padding-left: 5px;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  width: 30%;
  color: #7b9c58;
  border-bottom: 1px solid #7b9c58;
  font-size: 40px;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Container>
      <Title>ToDo List</Title>
      <Box>
        <select value={category} onInput={onInput} className="select">
          <option value={Categories.TODO}>Todo</option>
          <option value={Categories.FINISH}>Finish</option>
          <option value={Categories.DELETE}>Delete</option>
        </select>
      </Box>
      <CreateToDo />
      {toDos?.map((toDoItem) => (
        <ToDo key={toDoItem.id} {...toDoItem} />
      ))}
    </Container>
  );
};

export default ToDoList;
