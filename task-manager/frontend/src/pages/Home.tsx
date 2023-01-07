import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Task from "../layouts/Task";
type Props = {};

type TaskType = {
    name: string;
    conpleted: boolean;
};

const Home = function ({}: Props) {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        const fetchTasks: () => Promise<void> = async function () {
            try {
                const response = await axios.get("http://localhost:5000/task", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    },
                });

                setTasks(response.data);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error);
                }
            }
        };
        fetchTasks();
    }, []);
    return (
        <Container>
            <div>
                <h2>Task Manager</h2>
                <Wrapper>
                    <input placeholder="Enter your task" type="text" />
                    <button>Submit</button>
                </Wrapper>
            </div>
            {tasks.map(function (task, index) {
                return (
                    <Task
                        key={index}
                        name={task.name}
                        completed={task.conpleted}
                    />
                );
            })}
        </Container>
    );
};

export default Home;

const Container = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > div {
        background-color: #fff;
        width: 400px;
        height: 200px;
        margin-top: 150px;
        box-shadow: 0 0 10px 10px rgba(0 0 0/0.1);
        border-radius: 10px;

        & > h2 {
            color: #333;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            font-family: "Courier New", Courier, monospace;
            margin-top: 25px;
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    border: #000;
    width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    height: 40px;
    input {
        flex: 1;
        border: none;
        outline: none;
        background-color: lightgray;
        padding: 10px;
        border-radius: 2px;
        font-size: 17px;
        color: #000;
    }

    button {
        height: 100%;
        border: none;
        outline: none;
        background-color: orangered;
        border: 2px solid orange;
        color: #ffffff;
        padding: 6px;
        cursor: pointer;
    }
`;
