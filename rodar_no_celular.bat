@echo off
title Servidor Local para Celular
cls

echo ========================================================
echo   ARQUEOLOGIA DO ENTULHO - SERVIDOR LOCAL
echo ========================================================
echo.
echo 1. Certifique-se de que seu celular e PC estao no mesmo Wi-Fi.
echo 2. Abaixo estao os seus enderecos IP. Procure por "IPv4".
echo.
echo --------------------------------------------------------
ipconfig | findstr "IPv4"
echo --------------------------------------------------------
echo.
echo 3. No navegador do seu celular, digite o IP que apareceu acima
echo    seguido de :8000
echo.
echo    Exemplo: http://192.168.0.15:8000
echo.
echo ========================================================
echo   Iniciando servidor... (Pressione Ctrl+C para parar)
echo ========================================================
echo.

:: Tenta rodar com Python 3 (padrao mais comum hoje)
python -m http.server 8000 --bind 0.0.0.0 2>nul

:: Se falhar, tenta Python 2 (caso seja antigo)
if errorlevel 1 (
    python -m SimpleHTTPServer 8000
)

pause