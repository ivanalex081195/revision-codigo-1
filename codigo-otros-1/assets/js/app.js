/* 
En el index se corrigieron las rutas de src de los archivos css y js, en este archivo 
se encuentra un queryselector que no estáe en el index y se corrigio con apostrofe el otro
La función displayUser necesita un async para usar await.
*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('blog');
// const $l = document.querySelector('.location'); // Location no está definido en el index


//Para que funcione await, necesitamos async, pero no encuentro dónde ponerlo T.T
function /* async? */ displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  n.textContent = `Algo salió mal: ${error}`
}

displayUser('stolinski').catch(handleError);