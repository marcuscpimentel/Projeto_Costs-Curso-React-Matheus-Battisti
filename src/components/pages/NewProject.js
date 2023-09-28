import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();

  function CreatePost(project) {
    //Initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("https://hc8v3v-5000.csb.app/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then(
        (data) => console.log(data),
        //redirect
        navigate("/projects", {
          message: "Projeto criado com sucesso!",
        }),
      )
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={CreatePost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
