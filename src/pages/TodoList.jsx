import React, {useState} from "react";
import Layout from '../compornents/layout/Layout';
import Form from '../compornents/form/Form';
import Header from '../compornents/header/Header';
import List from '../compornents/list/List';


const TodoList = () => {
  const [todos, setTodos] = useState ([
    {
      id: 1,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
    {
      id: 2,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  )
}

export default TodoList;