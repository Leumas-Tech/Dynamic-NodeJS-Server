@echo off
setlocal

:: Set the source and destination directories
set src_dir="C:\Users\sqwillyum\Desktop\LeumasAI\x\x.dynamicServer"
set dest_dir="D:\ServerBackups\x.dynamicServer_backup"

:: Create the backup directory if it doesn't exist
if not exist %dest_dir% (
    mkdir %dest_dir%
)

:: Copy files excluding node_modules
robocopy %src_dir% %dest_dir% /MIR /XD node_modules

endlocal
echo Backup of x.dynamicServer completed.
pause
