# Estructura de carpetas en node.js

Describe la estructura de carpeta básica para proyectos pequeños y de mediano tamaño que están desarrollados con Node.js y Express.

## Estructura de carpetas

La siguiente estructura de carpetas no es un estándar como tal, tu puedes crear el mismo proyecto con una estructura distinta y te va a funcionar, sin embargo, recomiendo esta porque muchos desarrolladores la usan para sus proyectos en producción. Evidentemente existen muchas otras mejores formas de hacerlo, pero para proyecto pequeños donde no necesita estresarse y perder tiempo en una estructura compleja como lo son las arquitecturas limpias.

### Routes

Claramente contendremos las rutas de la aplicación aquí. Las rutas son responsables de recibir las solicitudes HTTP entrantes y enviarlas al controlador correspondiente. En nuestra aplicación, utilizaremos Express para manejar las rutas, esto se ve mas o menos así:

![routes/productRoutes.js](https://media.licdn.com/dms/image/D4E12AQH5Xj_sB2VVig/article-inline_image-shrink_1000_1488/0/1680624678654?e=1719446400&v=beta&t=YZzmHwviVoe1MezwiWnW395d6M7AbfxxTmc5FIKT-w8)

> Es recomendable que exista un index.js en la carpeta routes, este será el responsable de orquestar todas las rutas de tu aplicación, de está manera podrás crear un archivo de rutas para cada recurso (Modelo) de tu app.

### Controllers

Los controladores son responsables de en rutar hacia la lógica de negocio de nuestra aplicación. Reciben solicitudes de las rutas y utilizan los servicios correspondientes para procesarlos. En nuestro ejemplo, tendremos un controlador de productos que manejará todas las solicitudes relacionadas con los productos.
Veamos como se ve el controlador de productos:

![controllers/productController.js](https://media.licdn.com/dms/image/D4E12AQHmN6i47wejUw/article-inline_image-shrink_1000_1488/0/1680629009838?e=1719446400&v=beta&t=S9jhdNmZaE8fb1GSNBB7fA_V17-7TIVEYCjlDweh4Lg)

> Los controladores no deben tener ningún tipo de lógica de negocio ya que esta estará contenida en los servicios.

### Services

Los servicios son responsables de implementar la lógica de negocio de nuestra aplicación. Reciben solicitudes de los controladores y utilizan los repositorios correspondientes para interactuar con la base de datos. En nuestro ejemplo, tendremos un servicio de productos que manejará todas las solicitudes relacionadas con los productos.

![services/productService.js](https://media.licdn.com/dms/image/D4E12AQF1nFOARQiqGw/article-inline_image-shrink_1000_1488/0/1680638372350?e=1719446400&v=beta&t=FF67XtOuy2KjN2SFKTEB2tgUoOZ1Wyjb4B7sEp0y_5s)

> **Lógica de Negocio:** _En informática y ciencias de la computación, en particular en análisis y diseño orientado a objetos, el término lógica de negocio es la parte de un sistema que se encarga de codificar las reglas de negocio del mundo real que determinan cómo la información puede ser creada, almacenada y cambiada._

### Repositories

Los repositorios son responsables de interactuar con la base de datos. Son el punto de entrada para la persistencia de datos en nuestra aplicación. En nuestro ejemplo, tendremos un repositorio de productos que manejará todas las interacciones con la tabla de productos.
Pondré todos las funciones y su implementación así que la imagen será un poco alta, veamos como se ve:

![repositories/productRepository.js](https://media.licdn.com/dms/image/D4E12AQEdGKF99wkecw/article-inline_image-shrink_1500_2232/0/1680641055125?e=1719446400&v=beta&t=KdVGiF7U8gkH-f2iPRON8W3bVH9JBvthUt255XBnjtU)

## ¿Que otras carpetas se pueden configurar?

A partir de aquí pueden surgir otras carpetas importantes que puede necesitar en un futuro, como lo son:

1. Middlewares
2. Models
3. Config
4. utils
5. adapters

Dependiendo de lo que necesites puedes ir agregándolas.

Te dejo este enlace a mi post [Clean Architecture en Node y Express](https://www.linkedin.com/pulse/clean-architecture-en-node-y-express-odannys-de-la-cruz/) donde puedes ver un ejemplo completo con las demás carpetas.

### **Espero esto te ayude en tus futuros proyectos**
