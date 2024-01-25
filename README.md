# Como usar?

Descarga pocketbase de aca https://pocketbase.io/docs/
y poner el archivo pocketbase.exe en la carpeta de este proyecto

Luego escribi ./pocketbase serve
Y tenes el backend andando en tu compu

Aunque con clickear pb.bat anda el backend

# Para autenticarse
endpoint 
POST http://localhost:8090/api/collections/users/auth-with-password
body
{
  "identity":"admin",
  "password":"admin"
}
{
 "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

# Luego para usar los demas endpoints
poner en la cabecera
la clave Authorization y valor el token
