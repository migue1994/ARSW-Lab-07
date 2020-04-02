# ARSW LAB 07

## Autores:

Natalia Durán

Miguel Rivera

## Broker de mensajes STOMP

### Parte 1

Se completó la función publishPoint de la siguiente manera:

![1](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/1.PNG)

Por otro lado, se modificó la función connectAndSubscribe para que todos los que estén suscritos puedan ver los cambios.

![2](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/2.PNG)

Esto con el fín de que en una pestaña se cree un punto, el cual se deberá ver en la otra pestaña de la misma manera

![3](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/3.PNG)

Y en la otra pestaña, en efecto se ve la confirmación del punto creado

![4](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/4.PNG)

### parte 2

Para que se pueda dibujar el circulo en el canvas, debemos modificar la función init, con el fin de que apenas inicie la aplicación, este invoque la función init, que se encargará de invocar otra función, que ejecutará otro prcedimiento que contiene un callback

![5](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/5.PNG)

Además debemos modificar la función connectAndSubscribe para que invoque el callback de la siguiente manera.

![6](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/6.PNG)

Nos deberá mostrar lo siguiente:

En la primera pestaña, dibujamos un punto, el cual debe ser replicado en la segunda pestaña.

![7](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/7.PNG)

Y así se verá la segunda pestaña

![8](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/8.PNG)

### Parte 3

Empezamos adicionando la nueva entrada, junto con el botón que nos permitirá manejar la subscripción

![9](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/9.PNG)

Una vez hecho lo anterior, debemos iniciar una variable en el init, con el fin de agregar el identificador tanto a la función que se encarga de publicar el punto, como a la que realiza la subscripción 

![10](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/10.PNG)

![11](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/11.PNG)

![12](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/12.PNG)

Esto nos permitirá realizar dos dibujos por aparte, en cada pestaña de la siguiente manera.

![13](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/13.PNG)

![14](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/14.PNG)

### Parte 4

Creamos la clase controlador, adicionalmente agregamos la función que nos permite manejar las subscripciones

![15](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/15.PNG)

Luego modificamos la función init, que nos permite controlar la ejecución del método siempre y cuando haya un identificador válido.

![16](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/16.PNG)

![17](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/17.PNG)

![18](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/18.PNG)

Podremos ver la siguiente, si ejecutamos nuevamente el proyecto.

![19](https://github.com/migue1994/ARSW-Lab-07/blob/master/img/19.PNG)
