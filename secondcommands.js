git clone <URL> <where to clone>   //Clone Repository into a new Directory
git clone <LocalRepo> <where to clone>   //Clone Repository into a new Directory


//Common Workflow
git checkout -b crazy-idea //Create the branch and switched to
git branch // View the branches
//CommonCommands like git add, status, commit, etc
git add .
git status
git commit -m "Workflow"
git push --set-upstream origin crazy-idea / git push -u origin crazy-idea//push to remote respository
git checkout master
git pull origin master    //Pull lastest from remote respository
git merge crazy-idea
git push origin master
git branch --delete crazy-idea  / git branch -d crazy-idea

//Make the link between the remote and the local repo 
git remote add origin https://github.com/FredoAlvaradoG/commands.git 
git remote -v // view the conction
git push -u origin master  / git push

git commit --amend -m "New message"
git push origin master -f