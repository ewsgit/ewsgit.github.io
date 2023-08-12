const PROJECTS_DATA = [
  {
    name: "YourDash",
    description: "A personalizable, self-hosted cloud platform",
    links: {
      github: "https://github.com/yourdash-app/yourdash",
      site: "https://yourdash-app.github.io"
    },
    source: "open",
    state: "active"
  },
  {
    name: "OpenCade",
    description: "",
    links: {
      github: "https://github.com/opencade/opencade",
      site: "https://opencade.github.io"
    },
    source: "open",
    state: "active"
  },
  {
    name: "OpenCade Engine",
    description: "A game engine written in python and typescript for desktop and web-based game development",
    links: {
      github: "https://github.com/opencade/opencade-engine"
    },
    source: "open",
    state: "active"
  },
  {
    name: "Test",
    description: "This is a sample description",
    links: {
      site: "https://example.com"
    },
    source: "closed",
    state: "archived"
  }
]

const CONTAINER_ELEMENT = document.getElementById("projects-container")

function createProjectElement(index, name, description, state, githubLink, siteLink, sourceType) {
  return `<div class="projects__content-project" style="transition:">
        <section class="projects__content-project__content">
          <h2 class="projects__content-project__content-title">${name || "No name provided"}</h2>
          <p class="projects__content-project__content-description">${description || "No description provided"}</p>
        </section>
        <section class="projects__content-project__actions">
          <span class="projects__content-project__state projects__content-project__state-${state || "unknown"}">State: ${state || "Unknown"}</span>
          <span class="projects__content-project__open-source">${sourceType || "Unknown"} source</span>
          <a href="${siteLink || "https://http.cat/404"}">Official site</a>
          <a href="${githubLink || "https://http.cat/404"}">View on GitHub</a>
        </section>
      </div>`
}

PROJECTS_DATA.forEach((project, ind) => {
  CONTAINER_ELEMENT.innerHTML += createProjectElement(ind, project?.name, project?.description, project?.state, project?.links?.github, project?.links?.site, project?.source)
})