import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IAuthor {
  name: string;
  email: string;
  age: number;
}

// 2. Create a Schema corresponding to the document interface.
const authorSchema = new Schema<IAuthor>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
});

// 3. Create a Model.
const Author = model('Author', authorSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/ea-mongoose');

  const author1:  IAuthor = {
    "name": 'Lucia',
    "email": 'luciao@gmail.es',
    "age": 23
  };
  const author2:  IAuthor = {
    "name": 'Seth',
    "email": 'sethr@gmail.es',
    "age": 23
  };
  const author3:  IAuthor = {
    "name": 'Lucia',
    "email": 'luciasoledad@gmail.es',
    "age": 35
  };
  const author4:  IAuthor = {
    "name": 'Lucia',
    "email": 'luciamaria@gmail.es',
    "age": 55
  };

  // Arreglo de autores
  const authorsArray = [author1, author2, author3, author4];
  
  // Guardar los autores en la base de datos
  for (const authorData of authorsArray) {
    const newAuthor = new Author(authorData); // Pasar el objeto `authorData`
    await newAuthor.save(); // Guardar el autor en la base de datos
    console.log("New author saved: " + newAuthor.email); // Mostrar el email del autor guardado
  }
  
   // Llamar a las funciones CRUD para Author
   performCRUD();
  }
  
  // Funciones CRUD
  
  // Ver autor buscando por nombre
  function findAuthorByName(name: "Lucia") {
    Author.findOne({ name: name })
      .then(author => {
        if (author) {
          console.log(`${author.name} is found, their age is ${author.age}`);
        } else {
          console.log('Author not found');
        }
      })
      .catch(error => {
        console.log('Error finding the author:', error);
      });
  }
  
  /*
  // Crear un nuevo autor
  function createAuthor(name: string, email: string, age: number) {
    const newAuthor = new Author({ name, email, age });
    newAuthor.save()
      .then(authorCreated => {
        console.log('New author created:', authorCreated);
      })
      .catch(error => {
        console.log('Error inserting a new author:', error);
      });
  }*/
  
  // Editar un autor
  function updateAuthorByName(name: string, updatedData: Partial<IAuthor>) {
    Author.findOneAndUpdate({ name: name }, updatedData, { new: true })
      .then(updatedAuthor => {
        if (updatedAuthor) {
          console.log('Author was updated:', updatedAuthor);
        } else {
          console.log('Author not found');
        }
      })
      .catch(error => {
        console.log('Error editing the author:', error);
      });
  }
  
  // Listar todos los autores
  function listAuthors() {
    Author.find({})
      .then(authors => {
        console.log('Authors list:', authors);
      })
      .catch(error => {
        console.log('Error listing authors:', error);
      });
  }
  
  /*
  // Borrar un autor por nombre
  function deleteAuthorByName(name: string) {
    Author.findOneAndDelete({ name: name })
      .then(deletedAuthor => {
        if (deletedAuthor) {
          console.log('Author deleted:', deletedAuthor);
        } else {
          console.log('Author not found');
        }
      })
      .catch(error => {
        console.log('Error deleting the author:', error);
      });
  }*/
  
  // Ejecutar las funciones CRUD
  function performCRUD() {
    // Buscar un autor
    findAuthorByName('Lucia');
  
    // Crear un nuevo autor
    //createAuthor('John Doe', 'john.doe@example.com', 40);
  
    // Actualizar un autor
    updateAuthorByName('Lucia', { age: 45 });
  
    // Listar todos los autores
    listAuthors();
  
    // Borrar un autor
    //deleteAuthorByName('John Doe');
  }
  
  // Ejecutar la función principal
  run().catch(err => console.log(err));