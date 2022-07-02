import { getTodos } from "apis/fetcher";
import { TodoType } from "App";
import useSisyphe from "hooks/useSisyphe";
import React from "react";
import { useQuery } from "react-query";

const CountIndicator = ({ completedCount }: { completedCount: number }) => {
  const {
    data: todos,
    isLoading,
    error,
  } = useSisyphe<TodoType[]>("todo", getTodos);

  // const {
  //   data: todos,
  //   isLoading,
  //   error,
  // } = useQuery<TodoType[]>("todo", getTodos, { staleTime: 500 });

  return <div>Total completed todo : {completedCount}</div>;
};

export default CountIndicator;
