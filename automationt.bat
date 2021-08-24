set -e
echo deleting file

del "E:\martin\final\mejdi\dblank.txt" /s /f /q

echo Done!
git add -A
git commit -m 'update'

# update
git push -f https://github.com/mejdi14/mejdi.git


@echo off
  echo.>"E:\martin\final\mejdi\dblank.txt"

git add -A
git commit -m 'update'

# update
git push -f https://github.com/mejdi14/mejdi.git

