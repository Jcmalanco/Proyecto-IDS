
/* =========================================
   1. DATOS DE LAS MASCOTAS
========================================= */

const pets = [
    {
        id: 1,
        name: "Luna",
        species: "Perro",
        breed: "Mestiza",
        age: "Cachorro",
        ageText: "5 meses",
        size: "Mediano",
        sex: "Hembra",
        location: "Chihuahua, Chih.",
        shelter: "Huellitas Felices",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80",
        description:
            "Juguetona, cariñosa y llena de energía. Sueña con una familia que la acompañe en sus aventuras."
    },

    {
        id: 2,
        name: "Milo",
        species: "Gato",
        breed: "Atigrado",
        age: "Adulto",
        ageText: "2 años",
        size: "Pequeño",
        sex: "Macho",
        location: "Chihuahua, Chih.",
        shelter: "Patitas al Rescate",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
        description:
            "Un gatito tranquilo y curioso que disfruta las siestas al sol y las caricias suaves."
    }

    // Agrega aquí las demás mascotas
];


/* =========================================
   2. DATOS DE LOS REFUGIOS
========================================= */

const shelters = [
    {
        name: "Huellitas Felices",
        location: "Chihuahua, Chih.",
        description:
            "Rescate y rehabilitación de perros en situación de calle.",
        icon: "🐕"
    },

    {
        name: "Patitas al Rescate",
        location: "Chihuahua, Chih.",
        description:
            "Promovemos la adopción responsable y el bienestar animal.",
        icon: "🐾"
    },

    {
        name: "Casa Michi",
        location: "Chihuahua, Chih.",
        description:
            "Un refugio dedicado a gatos y pequeños animales.",
        icon: "🐈"
    }
];


/* =========================================
   3. VARIABLES Y ELEMENTOS DEL DOM
========================================= */

const $ = (id) => document.getElementById(id);

const favorites = new Set();


/* =========================================
   4. MOSTRAR Y FILTRAR MASCOTAS
========================================= */

function renderPets() {
    const q = $("searchInput").value
        .toLowerCase()
        .trim();

    const sp = $("speciesFilter").value;
    const age = $("ageFilter").value;
    const size = $("sizeFilter").value;

    const list = pets.filter((p) => {
        const matchesSearch =
            !q ||
            (p.name + " " + p.breed + " " + p.shelter)
                .toLowerCase()
                .includes(q);

        const matchesSpecies =
            !sp || p.species === sp;

        const matchesAge =
            !age || p.age === age;

        const matchesSize =
            !size || p.size === size;

        return (
            matchesSearch &&
            matchesSpecies &&
            matchesAge &&
            matchesSize
        );
    });

    $("resultCount").textContent =
        `${list.length} ${
            list.length === 1
                ? "compañero"
                : "compañeros"
        }`;

    $("emptyState").classList.toggle(
        "hidden",
        list.length !== 0
    );

    $("petGrid").innerHTML = list
        .map((p) => `
            <article class="pet-card">

                <div class="pet-photo">
                    <img
                        src="${p.image}"
                        alt="${p.name}, ${p.species} en adopción"
                        loading="lazy"
                    >

                    <span class="pet-badge">
                        En adopción
                    </span>

                    <button
                        class="favorite ${
                            favorites.has(p.id) ? "active" : ""
                        }"
                        data-fav="${p.id}"
                        aria-label="Guardar ${p.name}"
                    >
                        ${favorites.has(p.id) ? "♥" : "♡"}
                    </button>
                </div>

                <div class="pet-info">

                    <div class="pet-title">
                        <h3>${p.name}</h3>
                        <span>${p.sex}</span>
                    </div>

                    <div class="pet-meta">
                        <span>${p.breed}</span>
                        <span>${p.ageText}</span>
                        <span>${p.size}</span>
                    </div>

                    <p>${p.description}</p>

                    <div class="pet-footer">
                        <span class="shelter-name">
                            ⌖ ${p.location}
                        </span>

                        <button data-adopt="${p.id}">
                            Conocer a ${p.name} →
                        </button>
                    </div>

                </div>
            </article>
        `)
        .join("");
}


/* =========================================
   5. MOSTRAR REFUGIOS
========================================= */

function renderShelters() {
    $("shelterGrid").innerHTML = shelters
        .map((s) => `
            <article class="shelter-card">

                <div class="shelter-icon">
                    ${s.icon}
                </div>

                <div>
                    <h3>${s.name}</h3>

                    <p>
                        ⌖ ${s.location}
                        <br>
                        ${s.description}
                    </p>
                </div>

            </article>
        `)
        .join("");
}


/* =========================================
   6. NOTIFICACIONES
========================================= */

function showToast(msg) {
    const t = $("toast");

    t.textContent = msg;
    t.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        t.classList.remove("show");
    }, 3400);
}


/* =========================================
   7. INICIALIZACIÓN
========================================= */

renderPets();
renderShelters();