class Sidebar {
    renderSidebar() {
        this.sidebar = document.createElement('aside');
        this.sidebar.className = 'sidebar';
        this.renderSidebarItems();

        root.appendChild(this.sidebar);

        return this;
    }

    renderSidebarItems() {
        const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

        regions.forEach((region) => {
            const sidebarItem = document.createElement('div');
            sidebarItem.className = 'sidebar__item';
            sidebarItem.innerHTML = `
              <input 
                  type="radio" 
                  id=${region.toLowerCase()} 
                  name="region" 
                  value=${region.toLowerCase()}
                  ${region === 'All' ? 'checked' : ''}>
              <label for=${region.toLowerCase()}>${region}</label>
          `;
            this.sidebar.appendChild(sidebarItem);
        });

        return this;
    }
}
