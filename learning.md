# NestJS

```npm i -g @nestjs/cli```
```nest new project-name```

### Modules
 - App is the root module, we can create any modules and we should place them in app modules imports[], basically we are registering our module in app module
 - App module is responsible for creating dependency tree.
 - Similarly for controllers and services we should register them to where it belongs to.
 - Module is identified by @Module decorator, it consists of (imports, controllers, providers)
 - ```nest generate module ninjas``` or ```nest g m ninjas```
 - ```nest generate controller ninjas``` or ```nest g c ninjas```
 - ```nest generate service ninjas``` or ```nest g s ninjas```
 - When we create service and controller using cli, the ninjas module will be updated with providers[] and controllers[]
 - There is a command where we can generate entire resourse with dtos, controllers and services ```nest generate resourse users```

### Controllers
 - Controller is identified by @Controller('ninjas') it takes a string which is route
 - Inside we can write methods and we can define the routes by @Get @Post etc decorators
 - @Get(':id') we can catch that param with ```@Param('id') id : string```
 - @Get will also receive query params we can catch that with ```@Query('type') type: string```
 - @Post will receive body we can catch using ```@Body newUser : CreateNinjaDto```
 - dtos are something which define the structure of incoming body and used for validation using class-validator and class-transformer functions
 - we will create a folder named dto to place all dtos related to that module

### Providers or Services
- Service is identified by @Injectable() decorator, these are automatically injected to the controller by nestjs.
- In Controller class the service will be injected inside constructor
- We can write any method and those methods can be used inside the constructor
- In Services we can write the busines logic for the application.
- Services interact with the models and write db queries and also interact with ORMS like seequelize,typeORM etc.


### Exception handling
 - Nest js has lot of built in exceptions we can check the instance and we can send appropriote error to the end user

### Pipes
 - Pipes are used for validations and transformations, its like a middleware.
 - class-vaalidator, class-transformer are used to set validations for dtos, and we have a pipe names validationPipe will make sure that is followed
 - We can set pipe at global level, controller level, method level also.

### Guards
 - Guards can be identified by @Injectable only it extends with canActivate class and it has access to gloabalExecution context and incoming request
 - It performs logic and returns true or false.
 - Used for Authentication and role based access.


### DTOs

 - We can write dtos as a class and we can use decorators from class-validator package
 - We can define a global pipe in main.ts
 - ```app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));```
 - Transform will transform plain objects to classes to compare validations with class-validator
 - class-transformer is internally used by nestjs 

### interceptors


### jwt strategy and passport


### exception filters

### mongodb

### seqeelize

### schema


 ### main.ts
 - We can define useGloablPipes, useGlobalGuards, useGlobalInterceptors, everything at global level.
 - We can also do the same with controller level and method level.

 ### note
 - We can create any class for any untility and keep it as @injectable. and it should be in providers in module file.

