# Introdution
En este proyecto se hace incapie a distintas caracteristicas básicas de Angular. El objetivo es tener disponible un proyecto de ejemplo para tener de referencia al momento de querer construir alguna caracteristica puntual. Entre las caracteristicas que se desarrollaron estan:

## Binding Interpolation and Data Binding
Se agregan ejemplos de como obtener el valor de propiedades del componente desde la vista, mediante un evento de la vista ejecutar un metodo del componente y doble binding con el uso de la directiva ngModel.

## Directives
Se emplea el uso de distintas directivas provistas por Angular como: ngIf, ngFor, etc..

## Pipes
Se utilizan pipes propios de Angular y se creo un pipe personalizado para tranformar algunos datos.

## Defining Interfaces
Se empleo el uso fuerte de tipado, para ello se crean interfaces para tipar los objetos y evitar el uso de "any".

## Getter and Setters
Para las propiedades que queremos encapsular, se utilizan getters and setters para acceder al valor de esas propiedades privadas.

## Nested Components
Se creo un componente para visualiar el rating en estrellas de los productos y se agrega al componente que muestra el listado de productos. Ademas, se agrega la logica para pasar data desde el componente hijo al componente padre y viceversa (@Input() / @Output())

## Services and Dependecy Injection
Mediante el uso de servicios, se muestra el funcionamiento de la inyeccion de dependencias en un componente y el concepto de instancia Singleton. En el servicio, se utiliza HTTP request con el uso de Observables y por ende, las suscripciones y desuscripciones de los componentes a dicho observable. 

## Routing 
Se utiliza un ruteo básico entre modulos, con manejo de rutas para distintos componentes y rutas hijas para los componentes de submodulos. Ademas, se muestra como enviar un parametro data por medio de la ruta.

## Guard
Se agrego un guard para validar el correcto acceso a uno de los componentes.

## Modules
Con el objetivo de desacoplar el modulo root (AppModule), se modulariza la aplicación. De esta manera, se abstraen las responsabilidades de cada modulo. Se hace foco en el correcto uso de los imports, declarators y exports.  




