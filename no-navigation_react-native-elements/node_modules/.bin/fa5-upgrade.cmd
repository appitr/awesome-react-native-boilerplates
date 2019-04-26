@IF EXIST "%~dp0\/bin/sh.exe" (
  "%~dp0\/bin/sh.exe"  "%~dp0\..\react-native-vector-icons\bin\fa5-upgrade.sh" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  /bin/sh  "%~dp0\..\react-native-vector-icons\bin\fa5-upgrade.sh" %*
)