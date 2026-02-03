function toggleMenu(id) {
    document.getElementById(id).classList.toggle('hidden');
}
function gerarCarteirinha(nome, curso, cpf, foto, nascimento, matricula) {
    const container = document.getElementById('modal-container');

    const htmlCarteirinha = `
        <div class="overlay-carteirinha" id="overlay-fechar" onclick="fecharCarteirinha()">
            <div class="card-estacio-novo" onclick="event.stopPropagation()">
                
                <div class="card-header-novo">
                    <div class="foto-perfil-wrapper">
                        <img src="${foto}" alt="Foto" onerror="this.src='https://via.placeholder.com/80?text=👤'">
                    </div>
                    <div class="nome-status">
                        <h2>${nome}</h2>
                        <span class="badge-formado">Em Andamento</span>
                    </div>
                </div>

                <hr class="divisor">

                <div class="info-row">
                    <div class="info-group">
                        <label>CPF</label>
                        <p>${cpf}</p>
                    </div>
                    <div class="info-group">
                        <label>Nascimento</label>
                        <p>${nascimento}</p>
                    </div>
                </div>

                <div class="info-full">
                    <label>Curso</label>
                    <p>${curso}</p>
                </div>

                <div class="info-row">
                    <div class="info-group">
                        <label>Tipo de curso</label>
                        <p>Graduação</p>
                    </div>
                    <div class="info-group">
                        <label>Modelo de ensino</label>
                        <p>Total ead</p>
                    </div>
                </div>

                <div class="info-full">
                    <label>Campus</label>
                    <p>Polo camargos - belo horizonte - mg</p>
                </div>

                <hr class="divisor">

                <div class="card-footer-novo">
                    <div class="info-group">
                        <label class="gold-label">Validade</label>
                        <p class="gold-text">Dez 2030</p>
                    </div>
                    <div class="info-group">
                        <label>Matrícula</label>
                        <p>${matricula} <span class="copy-icon">📋</span></p>
                    </div>
                </div>

                <button type="button" class="btn-fechar-azul" onclick="fecharCarteirinha()">FECHAR CARTEIRINHA</button>
            </div>
        </div>
    `;

    container.innerHTML = htmlCarteirinha;
}

function fecharCarteirinha() {
    const container = document.getElementById('modal-container');
    if (container) {
        container.innerHTML = ''; // Esvazia o container para fechar
    }
}

// Seleciona os elementos
const menuBtn = document.querySelector('.menu-hamb');
const sidebar = document.querySelector('.sidebar');

// Ouve o clique
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// DICA: Fechar o menu ao clicar em um link (opcional, mas bom para UX)
const navLinks = document.querySelectorAll('.side-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});


const menuHamb = document.querySelector('.menu-hamb');

menuHamb.addEventListener('click', () => {
  const bars = menuHamb.querySelector('.fa-bars');
  const times = menuHamb.querySelector('.fa-times');

  if (bars.style.display === 'none') {
    bars.style.display = 'block';
    times.style.display = 'none';
  } else {
    bars.style.display = 'none';
    times.style.display = 'block';
  }
});




// js/index.js aplicação nova tirando o js do htmkl
// document.addEventListener("DOMContentLoaded", () => {
//     initMenus();
//     initCarteirinhas();
// });

// function initMenus() {
//     document.querySelectorAll(".folder-trigger").forEach(trigger => {
//         trigger.addEventListener("click", () => {
//             const menuId = trigger.dataset.menu;
//             const menu = document.getElementById(menuId);

//             if (!menu) return;

//             const isOpen = !menu.classList.contains("hidden");

//             menu.classList.toggle("hidden");
//             trigger.setAttribute("aria-expanded", String(!isOpen));
//             menu.setAttribute("aria-hidden", String(isOpen));
//         });
//     });
// }

// function initCarteirinhas() {
//     document.querySelectorAll(".btn-estudante").forEach(button => {
//         button.addEventListener("click", () => {
//             const {
//                 nome,
//                 curso,
//                 cpf,
//                 foto,
//                 nascimento,
//                 matricula
//             } = button.dataset;

//             gerarCarteirinha(
//                 nome,
//                 curso,
//                 cpf,
//                 foto,
//                 nascimento,
//                 matricula
//             );
//         });
//     });
// }
