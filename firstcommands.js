touch README.md
touch .gitignore

git init    //Initialize local git repository

git add filename / git add .    //Add File / all Files To index

git status  //Check status of working tree

git rm --cached filename / git rm --cached -r . //Remove file / all files of the index

git commit -m "Description"  / git commit -am "addAndCommit"    //commit and description /add to index and commit description

git log / git log --online  //get log / get log one line of commits

git checkout ID / git checkout master //change into commit via id of log