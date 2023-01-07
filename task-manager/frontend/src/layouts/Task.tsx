import React from "react";
import styled from "styled-components";

type Props = { name: string; completed: boolean };

const Task = function ({ name, completed }: Props) {
    return (
        <TaskContainer>
            {name}, {completed.toString()}
        </TaskContainer>
    );
};

export default Task;

const TaskContainer = styled.main``;
