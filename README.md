# ProjectsManager

this is a dotnet 6 API with a Angular frontend 

## Dotnet backend

cd into ProjectsManager and run 
install dotnet-ef to run migration
```
dotnet tool install --global dotnet-ef
dotnet ef update database
```
install nugget packages and run the API
```
dotnet restore
dotnet run
```
you can test the API in swagger in URL <br>
https://localhost:7032/swagger/index.html <br>
<hr>

## Angular frontend
cd into AngularApp and run 
```
npm i
ng serve
```
you can test the angular app in URL <br>
http://localhost:4200 <br>

