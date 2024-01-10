import React from "react";
import Section1Card from "@/app/project/components/mainContents/sectionProgressProjects/Section1Card";
import { _myProjects } from "@/constant/_[project]mockup";
import styled from "styled-components";
const MyProject = () => {
  return (
    <ProjectContainer>
      {_myProjects.map((project) => (
        <div key={project.id}>
          <Section1Card project={project} />
        </div>
      ))}
    </ProjectContainer>
  );
};

export default MyProject;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  div {
    width: 100%;
    h3 {
      color: white;
      font-size: 20px;
    }
  }
`;
