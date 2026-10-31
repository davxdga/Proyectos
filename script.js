const listaUsuarios = document.getElementById("listaUsuarios");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

async function cargarUsuarios() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      throw new Error("No se pudieron obtener los usuarios.");
    }

    const usuarios = await respuesta.json();
    mostrarUsuarios(usuarios);
    contador.textContent = usuarios.length + " usuarios";
    mensaje.textContent = "Pulsa una tarjeta para ver todos sus datos.";
  } catch (error) {
    mensaje.textContent = "Ocurrió un error al cargar los usuarios. Revisa tu conexión e inténtalo de nuevo.";
    contador.textContent = "Error";
    console.error(error);
  }
}

function mostrarUsuarios(usuarios) {
  listaUsuarios.innerHTML = "";

  usuarios.forEach(function(usuario) {
    const tarjeta = document.createElement("button");
    tarjeta.className = "tarjeta";
    tarjeta.type = "button";

    const iniciales = usuario.name.split(" ")
      .map(function(parte) { return parte[0]; })
      .slice(0, 2)
      .join("");

    tarjeta.innerHTML = `
      <div class="avatar">${iniciales}</div>
      <h3>${usuario.name}</h3>
      <p>@${usuario.username}</p>
      <p>${usuario.email}</p>
      <span class="abrir">Ver información completa →</span>
    `;

    tarjeta.addEventListener("click", function() {
      mostrarDetalles(usuario);
    });

    listaUsuarios.appendChild(tarjeta);
  });
}

function mostrarDetalles(usuario) {
  document.getElementById("modalNombre").textContent = usuario.name;
  document.getElementById("datoId").textContent = usuario.id;
  document.getElementById("datoNombre").textContent = usuario.name;
  document.getElementById("datoUsername").textContent = usuario.username;
  document.getElementById("datoEmail").textContent = usuario.email;
  document.getElementById("datoPhone").textContent = usuario.phone;
  document.getElementById("datoWebsite").textContent = usuario.website;

  modal.classList.remove("oculto");
}

function ocultarModal() {
  modal.classList.add("oculto");
}

cerrarModal.addEventListener("click", ocultarModal);

modal.addEventListener("click", function(evento) {
  if (evento.target === modal) {
    ocultarModal();
  }
});

document.addEventListener("keydown", function(evento) {
  if (evento.key === "Escape") {
    ocultarModal();
  }
});

cargarUsuarios();
