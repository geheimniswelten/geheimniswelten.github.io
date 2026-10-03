// Project fragments take precedence over ?project=; section fragments clear the selection.
const cards = [...document.querySelectorAll("[data-project]")];
const selectionStatus = document.getElementById("selection-status");
const projectAliases = { h5ugrid: "hiigrid" };

function updateProjectHighlight() {
  const url = new URL(window.location.href);
  let project = url.searchParams.get("project") || "";

  if (url.hash) {
    try {
      project = decodeURIComponent(url.hash.slice(1));
    } catch {
      project = "";
    }
  }

  const projectId = project.trim().toLowerCase();
  const selected = cards.find((card) => card.id === (projectAliases[projectId] || projectId));
  for (const card of cards) {
    card.classList.toggle("is-highlighted", card === selected);
  }
  selectionStatus.textContent = selected ? `${selected.dataset.project} ist hervorgehoben.` : "";

  // Native fragment navigation already handles canonical IDs; also accept repo-name casing.
  if (selected && url.hash && url.hash.slice(1) !== selected.id) {
    selected.scrollIntoView({ block: "start" });
  }
}

window.addEventListener("hashchange", updateProjectHighlight);
window.addEventListener("popstate", updateProjectHighlight);
updateProjectHighlight();
