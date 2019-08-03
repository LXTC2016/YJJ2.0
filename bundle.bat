if "%1" == "" @echo off && goto _error
set app = %1
if not exist %1 goto _error
c:
cd %1/android 
.\gradlew clean && cd %1 && react-native run-android
:_error
echo %1 dont exist
:_end
echo good bye