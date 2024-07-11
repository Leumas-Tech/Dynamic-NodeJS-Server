@echo off
:: Set the path to your server directory
set server_dir=C:\Users\sqwillyum\Desktop\LeumasAI\x\x.dynamicServer

:: Navigate to the server directory
cd /d "%server_dir%"

:: Start the server
node server.js

:: Pause to keep the command prompt open
pause
