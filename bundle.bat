if "%1" == "" @echo off && goto _error
set app = %1
if not exist %1 goto _error
cd %1\android && .\gradlew assembleRelease && cd app\build\outputs\apk && for /r %%d in (*.apk) do (move %%d \Users\Xiaojiju\Desktop\preview) && exit
:_error
echo %1 dont exist
:_end
echo good bye