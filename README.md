# :fire: Colinha do GIT nesse README  <img height="70" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

## Comandos mais usados:

#### Comandos para configurar o repositório localmente:
<html>
   <div>
      <ul>
         <li><strong>git init</strong> - Para inicializar o git na pasta local.</li>
         <li><strong>git checkout -b "nome da branch"</strong> - Para criar uma nova branch</li>
         <li><strong>git remote add origin "link do repositorio no git" </strong> - configura a palavra-chave origin como link destino do repositório na nuvem</li>
         <li><strong>git add . </strong> - adiciona os arquivos do projeto</li>
         <li><strong>git commit -m "first commit" </strong> - primeiro commit na nova branch</li>
         <li><strong>git push origin (branch)</strong> - uso este para subir na branch que estou trabalhando pela primeira vez.</li>
      </ul>
   </div>

#### Comandos para subir para o repositório no GitHub:
   
   <div>
      <ul>
         <li><strong>git add . </strong> - Para adicionar o projeto inteiro.</li>
         <li><strong>git commit -m "Mensagem que aparece no commit" -m "Descrição do commit"</strong> - Para colocar em stage, ou seja, o git reconhecer os arquivos</li>
         <li><strong>git push origin branch </strong> - uso este para subir a branch que se está trabalhando</li>
         <li><strong>git push origin (branch):(branch destino) </strong> - uso este para subir da branch que estou trabalhando para uma branch destino. <br>Exemplo: git push origin feat/felipe:develop</li>
      </ul>
   </div>

#### Alguns comandos que ajudam bastante:    

   <div>
      <ul>
         <li><strong>git reset --hard HEAD </strong> - Reseta as alterações feitas no código para o útlimo commit feito na brach.</li>
         <li><strong>git fetch</strong> - Atualiza o índice do git local com o da nuvem, ou seja, ele compara o estado do projeto local com o da nuvem.</li>
         <li><strong>git pull </strong> - Atualiza o projeto com o último commit feito no repositório.</li>
         <li><strong>git pull origin (branch)</strong> - Atualiza o projeoto da branch atual com o projeto de uma branch desejada. <br>Exemplo: Estou na branch develop e quero atualizar com os arquivos da branch main. O comando fica <strong>git pull origin main</strong></li>
         <li><strong>git branch --delete "nome da branch" </strong> - Deleta uma branch desejada.</li>
         <li><strong>git branch </strong> - Mostra todas as branches do projeto local .</li>
         <li><strong>git branch --all </strong> - Mostra todas as branches do projeto local e remoto.</li>
      </ul>
   </div>
</html>

### Espero que tenha ajudado 👋!
