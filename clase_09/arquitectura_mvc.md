# Arquitectura MVC

La arquitectura MVC (Modelo-Vista-Controlador) es un enfoque que organiza las aplicaciones en tres partes principales. Cada parte tiene un rol específico, lo que ayuda a que el código sea más fácil de entender y mantener.


### Componentes
- Modelo
El modelo es como la "caja" donde se guardan los datos. Se encarga de cómo se almacenan y se recuperan los datos de la base de datos. Piensa en él como un archivero que contiene toda la información que tu aplicación necesita.
- Vista
La vista es lo que los usuarios ven en la pantalla. Se encarga de mostrar los datos del modelo y de recibir la información que el usuario introduce (como formularios). No se preocupa por cómo funcionan las cosas detrás de escena; su único trabajo es presentar la información.
- Controlador
El controlador es el "intermediario" entre el modelo y la vista. Cuando el usuario interactúa con la vista (por ejemplo, al hacer clic en un botón), el controlador recibe esa acción, procesa la información (a veces pidiendo datos al modelo) y luego actualiza la vista para mostrar los resultados.


### Directorios
1. **Models**
Aquí se define cómo son los datos y las reglas que deben seguir (por ejemplo, qué datos son obligatorios). Es donde se establece la estructura de la información en la base de datos.
2. **DAOs** (Data Access Objects)
Estos son responsables de acceder a la base de datos. Proporcionan métodos para crear, leer, actualizar y eliminar información. Imagina que son los "mensajeros" que llevan y traen datos de la base de datos.
3. **Services**
Contiene la lógica de negocio. Utiliza los DAOs para realizar operaciones sobre los datos, maneja la validación y el procesamiento de información antes de interactuar con los controladores.
4. **Controllers**
Los controladores gestionan las solicitudes entrantes del usuario y coordinan las respuestas adecuadas. Funcionan como un "mapa" que guía las solicitudes hacia su destino correcto dentro de la aplicación.
5. **Routers**
Los routers organizan las rutas de la aplicación. Definen cómo se accede a diferentes partes de la API y conectan cada ruta con su controlador correspondiente. Son como un "mapa" que guía las solicitudes a su destino correcto.


### Resumen General
Cada parte de la arquitectura MVC tiene un rol específico que ayuda a mantener el código organizado. Esta separación hace que sea más fácil de mantener, probar y escalar la aplicación a medida que crece.
