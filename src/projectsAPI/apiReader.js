import projetos from "./projetos.json";

let prjctList = [];






projetos.map( project => {
        let projeto = {};
        projeto.titulo = project.titulo;
        projeto.descricao = project.descricao;
        prjctList.push(projeto);        
})

export default prjctList;


