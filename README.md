# ARSW LAB 07

## Autores:

Natalia Durán
Miguel Rivera

## Broker de mensajes STOMP

### Parte 1

Se completó la función publishPoint de la siguiente manera:

![1]()

Por otro lado, se modificó la función connectAndSubscribe para que todos los que estén suscritos puedan ver los cambios.

![2]()

Esto con el fín de que en una pestaña se cree un punto, el cual se deberá ver en la otra pestaña de la misma manera

![3]()

Y en la otra pestaña, en efecto se ve la confirmación del punto creado

![4]()

### parte 2

Para que se pueda dibujar el circulo en el canvas, debemos modificar la función init, con el fin de que apenas inicie la aplicación, este invoque la función init, que se encargará de invocar otra función, que ejecutará otro prcedimiento que contiene un callback

![5]()

Además debemos modificar la función connectAndSubscribe para que invoque el callback de la siguiente manera.

![6]()

Nos deberá mostrar lo siguiente:

En la primera pestaña, dibujamos un punto, el cual debe ser replicado en la segunda pestaña.

![7]()

Y así se verá la segunda pestaña

![8]()

### Parte 3

Empezamos adicionando la nueva entrada, junto con el botón que nos permitirá manejar la subscripción

![9]()

Una vez hecho lo anterior, debemos iniciar una variable en el init, con el fin de agregar el identificador tanto a la función que se encarga de publicar el punto, como a la que realiza la subscripción 

![10]()

![11]()

![12]()

Esto nos permitirá realizar dos dibujos por aparte, en cada pestaña de la siguiente manera.

![13]()

![14]()

### Parte 4

Creamos la clase controlador, adicionalmente agregamos la función que nos permite manejar las subscripciones

![15]()

Luego modificamos la función init, que nos permite controlar la ejecución del método siempre y cuando haya un identificador válido.

![16]()

![17]()

![18]()

Podremos ver la siguiente, si ejecutamos nuevamente el proyecto.

![19]()